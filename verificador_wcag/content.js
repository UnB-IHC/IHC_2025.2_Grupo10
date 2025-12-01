console.log("✅ WCAG content.js ativo");

function injectAxe() {
  return new Promise((resolve, reject) => {
    if (document.getElementById("axeScriptInjected") || window.axe) {
      console.log("⚠️ Axe já presente");
      return resolve();
    }

    const script = document.createElement("script");
    script.id = "axeScriptInjected";
    script.src = chrome.runtime.getURL("axe.min.js");
    script.onload = () => {
      console.log("✅ Axe carregado (injetado)");
      resolve();
    };
    script.onerror = (e) => {
      console.error("❌ Falha ao carregar axe.min.js", e);
      reject(new Error("Falha ao carregar axe.min.js"));
    };
    document.documentElement.appendChild(script);
  });
}

function injectPageScript() {
  return new Promise((resolve) => {
    if (document.getElementById("wcagPageScript")) {
      console.log("⚠️ pageScript já injetado");
      return resolve();
    }

    const s = document.createElement("script");
    s.id = "wcagPageScript";
    s.src = chrome.runtime.getURL("pageScript.js");

    s.onload = () => {
      console.log("✅ pageScript carregado");
      resolve();
    };

    s.onerror = () => {
      console.warn("⚠️ Falha ao injetar pageScript (mas continuaremos tentando)");
      resolve();
    };

    (document.head || document.documentElement).appendChild(s);
  });
}

// Remove todos os destaques existentes
function removeHighlights() {
  document.querySelectorAll(".wcag-highlight-overlay").forEach(el => el.remove());
}

// Aplica destaques visuais para os elementos violadores
function highlightViolations(violations) {
  try {
    removeHighlights();

    if (!Array.isArray(violations) || violations.length === 0) return;

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    violations.forEach(v => {
      (v.nodes || []).forEach(node => {
        (node.target || []).forEach(selector => {
          let els = [];
          try {
            els = Array.from(document.querySelectorAll(selector));
          } catch (err) {
            return;
          }

          els.forEach(el => {
            try {
              const rect = el.getBoundingClientRect();

              if (rect.width === 0 && rect.height === 0) {
                const parent = el.parentElement;
                if (parent) {
                  const pr = parent.getBoundingClientRect();
                  if (pr.width > 0 && pr.height > 0) {
                    rect.top = pr.top;
                    rect.left = pr.left;
                    rect.width = pr.width;
                    rect.height = pr.height;
                  }
                }
              }

              const overlay = document.createElement("div");
              overlay.className = "wcag-highlight-overlay";
              
              Object.assign(overlay.style, {
                position: "absolute",
                top: `${rect.top + scrollY}px`,
                left: `${rect.left + scrollX}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                border: "3px solid rgba(255,0,0,0.95)",
                backgroundColor: "rgba(255,0,0,0.06)",
                zIndex: "2147483647",
                pointerEvents: "none",
                boxSizing: "border-box"
              });

              document.body.appendChild(overlay);
            } catch (e) {
              // ignore per element
            }
          });
        });
      });
    });

  } catch (err) {
    console.error("Erro em highlightViolations:", err);
  }
}

// Listener para mensagens do background script
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "runAxe") {
    (async () => {
      try {
        await injectAxe();
        await injectPageScript();

        window.postMessage({ type: "RUN_AXE" }, "*");

        function listener(e) {
          if (!e || !e.data) return;
          if (e.data.type === "AXE_RESULTS") {
            window.removeEventListener("message", listener);
            const results = e.data.results || null;
            if (!results) {
              console.warn("wcag: AXE_RESULTS vazio ou nulo");
              sendResponse(null);
              return;
            }
            highlightViolations(results.violations || []);
            sendResponse(results);
          }
        }

        window.addEventListener("message", listener);

      } catch (err) {
        console.error("wcag: erro durante runAxe:", err);
        sendResponse(null);
      }
    })();

    return true;
  }

  if (req.action === "clearHighlights") {
    try {
      removeHighlights();
      sendResponse({ ok: true });
    } catch (e) {
      sendResponse({ ok: false, error: String(e) });
    }
    return true;
  }

  // ========== NOVA FUNÇÃO: Destacar apenas um erro específico ==========
  if (req.action === "highlightSingleError") {
    try {
      removeHighlights();
      highlightViolations([req.violation]);
      
      // Rola até o primeiro elemento do erro
      if (req.violation.nodes && req.violation.nodes.length > 0) {
        const firstTarget = req.violation.nodes[0].target[0];
        try {
          const element = document.querySelector(firstTarget);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } catch (e) {
          console.log("Não foi possível rolar até o elemento");
        }
      }
      
      sendResponse({ ok: true });
    } catch (e) {
      sendResponse({ ok: false, error: String(e) });
    }
    return true;
  }
});