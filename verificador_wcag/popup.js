function traduz(rule) {
  return window.axeTranslations?.[rule] || rule;
}

document.getElementById("scan").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "runAxe" }, (res) => {
      const box = document.getElementById("resultado");

      if (!res) {
        box.textContent = "❌ Erro ao rodar WCAG";
        return;
      }

      window.lastResults = res;

      const erros = res.violations.length;

      if (erros === 0) {
        box.textContent = "✅ Nenhum problema de acessibilidade encontrado!";
        return;
      }

      let txt = `✅ Concluído!\nEncontradas: ${erros} falhas\n\n`;

      res.violations.forEach(v => {
        const impactoTraduzido = traduzImpacto(v.impact);
        txt += `⚠️ ${traduz(v.id)}\nRegra: ${v.id}\nImpacto: ${impactoTraduzido}\n\n`;
      });

      box.textContent = txt;
    });
  });
});

document.getElementById("clear").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "clearHighlights" });
    document.getElementById("resultado").textContent = "✅ Destaques removidos";
  });
});

document.getElementById("exportTxt").addEventListener("click", () => {
  if (!window.lastResults) return alert("Execute o scan primeiro!");
  
  let txt = "Relatório WCAG\n\n";

  window.lastResults.violations.forEach(v => {
    const impactoTraduzido = traduzImpacto(v.impact);
    txt += `${traduz(v.id)}\nRegra: ${v.id}\nImpacto: ${impactoTraduzido}\n\n`;
  });

  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "wcag-relatorio.txt";
  a.click();
});

// document.getElementById("exportPdf").addEventListener("click", async () => {
//   if (!window.lastResults) return alert("Execute o scan primeiro!");

//   // jsPDF import
//   const jsPDFLib = window.jspdf?.jsPDF || window.jspdf?.jsPDF || window.jspdf?.jsPDFLib;
//   const doc = new jsPDFLib();

//   doc.setFontSize(14);
//   doc.text("Relatório WCAG (PT-BR)", 10, 10);

//   let y = 20;
//   window.lastResults.violations.forEach(v => {
//     const impactoTraduzido = traduzImpacto(v.impact);
//     doc.text(`${traduz(v.id)} (${v.id}) - Impacto: ${impactoTraduzido}`, 10, y);
//     y += 8;
//     if (y > 280) {  // quebra de página
//       doc.addPage();
//       y = 20;
//     }
//   });

//   doc.save("wcag-relatorio.pdf");
// });

// Tradução dos impactos
function traduzImpacto(impact) {
  const mapa = {
    critical: "Crítico",
    serious: "Grave",
    moderate: "Moderado",
    minor: "Leve"
  };
  return mapa[impact] || impact;
}
