function traduz(rule) {
  return window.axeTranslations?.[rule] || rule;
}

// ========== VARIÁVEIS GLOBAIS ==========
let currentFilter = 'all';
let currentErrorIndex = 0;
let filteredViolations = [];

// ========== MODO ESCURO ==========
function initTheme() {
  const savedTheme = localStorage.getItem('wcag-theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('#themeToggle .icon').textContent = '☀️';
  }
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  
  document.querySelector('#themeToggle .icon').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('wcag-theme', isDark ? 'dark' : 'light');
});

initTheme();

// ========== FUNÇÕES AUXILIARES ==========
function showLoading() {
  const box = document.getElementById("resultado");
  box.className = "loading";
  box.textContent = "⏳ Analisando página...";
}

function hideLoading() {
  const box = document.getElementById("resultado");
  box.classList.remove("loading");
}

function updateBadge(count) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({
      action: "updateBadge",
      count: count
    });
  });
}

// ========== FILTROS POR SEVERIDADE ==========
function updateFilterCounts() {
  if (!window.lastResults) return;

  const counts = {
    all: window.lastResults.violations.length,
    critical: 0,
    serious: 0,
    moderate: 0,
    minor: 0
  };

  window.lastResults.violations.forEach(v => {
    if (counts.hasOwnProperty(v.impact)) {
      counts[v.impact]++;
    }
  });

  // Atualiza os contadores na UI
  Object.keys(counts).forEach(key => {
    const countEl = document.getElementById(`count-${key}`);
    if (countEl) countEl.textContent = counts[key];
  });
}

function applyFilter(filter) {
  currentFilter = filter;
  
  if (!window.lastResults) return;

  // Filtra violações
  if (filter === 'all') {
    filteredViolations = [...window.lastResults.violations];
  } else {
    filteredViolations = window.lastResults.violations.filter(v => v.impact === filter);
  }

  // Reseta navegação
  currentErrorIndex = 0;

  // Atualiza UI
  displayFilteredResults();
  updateNavigationUI();
  highlightCurrentError();

  // Atualiza chips ativos
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
}

function displayFilteredResults() {
  const box = document.getElementById("resultado");
  
  if (filteredViolations.length === 0) {
    box.innerHTML = `
      <div style="text-align: center; padding: 16px;">
        <div style="font-size: 32px; margin-bottom: 8px;">🎯</div>
        <div style="color: var(--text-primary); font-weight: 600;">Nenhum problema nesta categoria</div>
      </div>
    `;
    return;
  }

  let txt = `📊 RESULTADOS FILTRADOS\n`;
  txt += `━━━━━━━━━━━━━━━━━━━━\n\n`;
  txt += `🔍 Mostrando: ${filteredViolations.length} problema(s)\n\n`;

  filteredViolations.forEach((v, i) => {
    const impactoTraduzido = traduzImpacto(v.impact);
    const emoji = getImpactEmoji(v.impact);
    txt += `${i + 1}. ${emoji} ${traduz(v.id)}\n`;
    txt += `   Regra: ${v.id}\n`;
    txt += `   Impacto: ${impactoTraduzido}\n`;
    txt += `   Elementos: ${v.nodes.length}\n\n`;
  });

  box.textContent = txt;
}

// ========== NAVEGAÇÃO VISUAL ==========
function updateNavigationUI() {
  const positionEl = document.getElementById('errorPosition');
  const prevBtn = document.getElementById('prevError');
  const nextBtn = document.getElementById('nextError');
  const infoEl = document.getElementById('currentErrorInfo');

  if (filteredViolations.length === 0) {
    positionEl.textContent = '0 / 0';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    infoEl.innerHTML = '<em style="color: var(--text-secondary);">Nenhum erro para navegar</em>';
    return;
  }

  positionEl.textContent = `${currentErrorIndex + 1} / ${filteredViolations.length}`;
  prevBtn.disabled = currentErrorIndex === 0;
  nextBtn.disabled = currentErrorIndex === filteredViolations.length - 1;

  // Mostra info do erro atual
  const currentError = filteredViolations[currentErrorIndex];
  const impactoTraduzido = traduzImpacto(currentError.impact);
  const emoji = getImpactEmoji(currentError.impact);
  
  infoEl.innerHTML = `
    <strong>${emoji} ${traduz(currentError.id)}</strong>
    <div style="margin-top: 4px; color: var(--text-secondary);">
      Impacto: ${impactoTraduzido} | Elementos: ${currentError.nodes.length}
    </div>
  `;
}

function highlightCurrentError() {
  if (filteredViolations.length === 0) return;

  const currentError = filteredViolations[currentErrorIndex];
  
  // Envia mensagem para destacar apenas o erro atual
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "highlightSingleError",
      violation: currentError
    });
  });
}

document.getElementById('prevError').addEventListener('click', () => {
  if (currentErrorIndex > 0) {
    currentErrorIndex--;
    updateNavigationUI();
    highlightCurrentError();
  }
});

document.getElementById('nextError').addEventListener('click', () => {
  if (currentErrorIndex < filteredViolations.length - 1) {
    currentErrorIndex++;
    updateNavigationUI();
    highlightCurrentError();
  }
});

// ========== LISTENERS DE FILTROS ==========
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    applyFilter(filter);
  });
});

// ========== SCAN ==========
document.getElementById("scan").addEventListener("click", () => {
  showLoading();
  
  // Esconde filtros e navegação durante scan
  document.getElementById('filterSection').style.display = 'none';
  document.getElementById('navigationSection').style.display = 'none';
  
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "runAxe" }, (res) => {
      const box = document.getElementById("resultado");
      hideLoading();

      if (!res) {
        box.innerHTML = `
          <div style="text-align: center; padding: 12px;">
            <div style="font-size: 32px; margin-bottom: 8px;">❌</div>
            <div style="color: #e53e3e; font-weight: 600;">Erro ao executar análise</div>
            <div style="color: var(--text-secondary); font-size: 12px; margin-top: 4px;">Verifique se a página está carregada</div>
          </div>
        `;
        updateBadge(0);
        return;
      }

      window.lastResults = res;
      const erros = res.violations.length;

      updateBadge(erros);

      if (erros === 0) {
        box.innerHTML = `
          <div style="text-align: center; padding: 16px;">
            <div style="font-size: 48px; margin-bottom: 8px;">✅</div>
            <div style="color: #48bb78; font-weight: 700; font-size: 16px;">Parabéns!</div>
            <div style="color: var(--text-primary); margin-top: 8px;">Nenhum problema de acessibilidade encontrado</div>
          </div>
        `;
        return;
      }

      // Mostra filtros e navegação
      document.getElementById('filterSection').style.display = 'block';
      document.getElementById('navigationSection').style.display = 'block';

      // Atualiza contadores e aplica filtro padrão
      updateFilterCounts();
      applyFilter('all');
    });
  });
});

// ========== COPIAR PARA CLIPBOARD ==========
document.getElementById("copyClipboard").addEventListener("click", async () => {
  if (!window.lastResults) {
    alert("⚠️ Execute um scan primeiro!");
    return;
  }

  const box = document.getElementById("resultado");
  const textToCopy = box.textContent;

  try {
    await navigator.clipboard.writeText(textToCopy);
    
    const originalContent = box.innerHTML;
    box.innerHTML = `
      <div style="text-align: center; padding: 16px;">
        <div style="font-size: 48px; margin-bottom: 8px;" class="success-icon">✅</div>
        <div style="color: #48bb78; font-weight: 700;">Copiado para clipboard!</div>
      </div>
    `;
    
    setTimeout(() => {
      box.innerHTML = originalContent;
    }, 1500);
    
  } catch (err) {
    alert("❌ Erro ao copiar. Tente novamente.");
  }
});

// ========== LIMPAR DESTAQUES ==========
document.getElementById("clear").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "clearHighlights" });
    const box = document.getElementById("resultado");
    box.innerHTML = `
      <div style="text-align: center; padding: 12px;">
        <div style="font-size: 32px; margin-bottom: 8px;">🧹</div>
        <div style="color: #48bb78; font-weight: 600;">Destaques removidos</div>
      </div>
    `;
    
    updateBadge(0);
    
    // Esconde filtros e navegação
    document.getElementById('filterSection').style.display = 'none';
    document.getElementById('navigationSection').style.display = 'none';
  });
});

// ========== EXPORTAR TXT ==========
document.getElementById("exportTxt").addEventListener("click", () => {
  if (!window.lastResults) {
    alert("⚠️ Execute um scan primeiro!");
    return;
  }
  
  let txt = "═══════════════════════════════════════\n";
  txt += "       RELATÓRIO WCAG - PT-BR\n";
  txt += "═══════════════════════════════════════\n\n";
  txt += `Data: ${new Date().toLocaleString('pt-BR')}\n`;
  txt += `Total de violações: ${window.lastResults.violations.length}\n\n`;

  txt += "───────────────────────────────────────\n";
  txt += "RESUMO POR IMPACTO\n";
  txt += "───────────────────────────────────────\n\n";

  const impactos = {
    critical: 0,
    serious: 0,
    moderate: 0,
    minor: 0
  };

  window.lastResults.violations.forEach(v => {
    if (impactos.hasOwnProperty(v.impact)) {
      impactos[v.impact]++;
    }
  });

  if (impactos.critical > 0) txt += `Críticos: ${impactos.critical}\n`;
  if (impactos.serious > 0) txt += `Graves: ${impactos.serious}\n`;
  if (impactos.moderate > 0) txt += `Moderados: ${impactos.moderate}\n`;
  if (impactos.minor > 0) txt += `Leves: ${impactos.minor}\n`;

  txt += "\n───────────────────────────────────────\n";
  txt += "DETALHAMENTO DAS VIOLAÇÕES\n";
  txt += "───────────────────────────────────────\n\n";

  window.lastResults.violations.forEach((v, i) => {
    const impactoTraduzido = traduzImpacto(v.impact);
    txt += `${i + 1}. ${traduz(v.id)}\n`;
    txt += `   Regra WCAG: ${v.id}\n`;
    txt += `   Impacto: ${impactoTraduzido}\n`;
    txt += `   Elementos afetados: ${v.nodes.length}\n`;
    txt += `   Descrição: ${v.description || 'N/A'}\n`;
    txt += `   Help: ${v.helpUrl || 'N/A'}\n`;
    txt += "\n";
  });

  txt += "═══════════════════════════════════════\n";
  txt += "Gerado por WCAG Checker\n";
  txt += "═══════════════════════════════════════\n";

  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `wcag-relatorio-${new Date().toISOString().split('T')[0]}.txt`;
  a.click();
  
  const box = document.getElementById("resultado");
  const originalContent = box.innerHTML;
  box.innerHTML = `
    <div style="text-align: center; padding: 12px;">
      <div style="font-size: 32px; margin-bottom: 8px;">📥</div>
      <div style="color: #48bb78; font-weight: 600;">Relatório exportado!</div>
    </div>
  `;
  setTimeout(() => {
    box.innerHTML = originalContent;
  }, 2000);
});

// ========== TRADUÇÃO ==========
function traduzImpacto(impact) {
  const mapa = {
    critical: "Crítico",
    serious: "Grave",
    moderate: "Moderado",
    minor: "Leve"
  };
  return mapa[impact] || impact;
}

function getImpactEmoji(impact) {
  const mapa = {
    critical: "⛔",
    serious: "🔴",
    moderate: "🟡",
    minor: "🟢"
  };
  return mapa[impact] || "⚠️";
}