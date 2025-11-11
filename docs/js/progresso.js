document.addEventListener("DOMContentLoaded", () => {
  // Só roda em páginas específicas
  const path = window.location.pathname.toLowerCase();
  const paginasComGrafico = [
    "design/design.html",
    "devweb/non_text_content.html",
    "geracaoconteudo/conteudo.html",
    "gestaoprojeto/gestaoprojeto.html"
  ];

  const deveMostrar = paginasComGrafico.some(p => path.endsWith(p));

  if (!deveMostrar) return; // Sai se não for uma dessas páginas

  // Salva o estado dos checkboxes por página
  const storageKey = `checkboxes_${path}`;

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (!checkboxes.length) return;

  // === Funções ===
  function salvarEstado() {
    const estado = [...checkboxes].map(ch => ch.checked);
    localStorage.setItem(storageKey, JSON.stringify(estado));
  }

  function carregarEstado() {
    const salvo = localStorage.getItem(storageKey);
    if (!salvo) return;
    const estado = JSON.parse(salvo);
    checkboxes.forEach((ch, i) => ch.checked = estado[i] || false);
  }

  function gerarGrafico() {
    // Remove gráfico anterior
    document.querySelectorAll(".grafico-progresso-container").forEach(e => e.remove());

    const total = checkboxes.length;
    const marcados = [...checkboxes].filter(ch => ch.checked).length;
    const porcentagem = Math.round((marcados / total) * 100);

    const container = document.createElement("div");
    container.className = "grafico-progresso-container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.margin = "30px 0";

    const titulo = document.createElement("h3");
    titulo.textContent = `Progresso: ${porcentagem}% concluído`;
    titulo.style.color = "#0046AD";
    titulo.style.marginBottom = "10px";

    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;

    container.appendChild(titulo);
    container.appendChild(canvas);

    const content = document.querySelector(".md-content");
    if (content) content.prepend(container);

    const ctx = canvas.getContext("2d");
    const centro = 100;
    const raio = 80;

    // Círculo cinza
    ctx.beginPath();
    ctx.arc(centro, centro, raio, 0, 2 * Math.PI);
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 15;
    ctx.stroke();

    // Círculo azul proporcional
    ctx.beginPath();
    ctx.arc(centro, centro, raio, -Math.PI / 2, (2 * Math.PI) * (porcentagem / 100) - Math.PI / 2);
    ctx.strokeStyle = "#0046AD";
    ctx.lineWidth = 15;
    ctx.stroke();

    // Texto central
    ctx.font = "20px Arial";
    ctx.fillStyle = "#0046AD";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${porcentagem}%`, centro, centro);
  }

  // === Inicializa ===
  carregarEstado();
  gerarGrafico();

  // === Atualiza em tempo real ===
  checkboxes.forEach(ch => {
    ch.addEventListener("change", () => {
      salvarEstado();
      gerarGrafico();
    });
  });
});
