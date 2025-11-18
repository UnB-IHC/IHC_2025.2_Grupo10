# WCAG Checker PT-BR — Extensão Chrome

Uma extensão que analisa qualquer página web e identifica problemas de acessibilidade segundo as diretrizes **WCAG 2.1**.  
Tudo traduzido para **português**, com destaque visual dos erros na página e exportação de relatórios.

---

## 🚀 Funcionalidades

- ✔️ Executa validação de acessibilidade usando **axe-core**  
- ✔️ Exibe resumo dos erros encontrados diretamente no popup  
- ✔️ Destaca visualmente os elementos problemáticos na página  
- ✔️ Exporta relatório em **TXT**  
- ✔️ Botão para limpar destaques visuais  

---

## 🧩 Como funciona

1. O usuário abre o popup e clica em **Escanear Página**.
2. O `content.js` injeta e executa o **axe-core** na página aberta.
3. O relatório bruto é enviado de volta ao popup.
4. As regras são traduzidas usando `translations.js`.
5. O popup mostra o resultado e permite **exportar em TXT**
6. O botão **Limpar Destaques** remove bordas vermelhas aplicadas nos elementos com erro.

---

## 🛠 Como instalar para desenvolvimento

1. Baixe a pasta completa da extensão.
2. Acesse:  
   **chrome://extensions**
3. Ative **Modo do desenvolvedor**.
4. Clique em **Carregar sem compactação**.
5. Selecione a pasta do projeto.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.  
Você pode usar, modificar e distribuir livremente.

