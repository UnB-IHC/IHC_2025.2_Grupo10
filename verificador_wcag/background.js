chrome.runtime.onInstalled.addListener(() => {
  console.log("Verificador WCAG com tradução PT-BR instalado!");
});

// Listener para atualizar badge quando houver resultados
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateBadge") {
    const count = request.count || 0;
    
    if (count === 0) {
      chrome.action.setBadgeText({ text: "", tabId: sender.tab.id });
    } else {
      chrome.action.setBadgeText({ text: String(count), tabId: sender.tab.id });
      
      // Cor baseada na severidade
      if (count >= 20) {
        chrome.action.setBadgeBackgroundColor({ color: "#e53e3e", tabId: sender.tab.id }); // Vermelho
      } else if (count >= 10) {
        chrome.action.setBadgeBackgroundColor({ color: "#ed8936", tabId: sender.tab.id }); // Laranja
      } else {
        chrome.action.setBadgeBackgroundColor({ color: "#48bb78", tabId: sender.tab.id }); // Verde
      }
    }
    
    sendResponse({ success: true });
  }
});