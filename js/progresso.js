document.addEventListener("DOMContentLoaded", function () {
  // Só executa se houver canvas de gráfico na página
  const canvases = document.querySelectorAll("canvas[id^='grafico']");
  if (!canvases.length) return;

  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-level]');
  const corPrincipal = "#007BFF";
  const corPendente = "#E0EAFD";

  // 🔹 Salva e restaura estado dos checkboxes por página
  const pageKey = window.location.pathname;
  const savedState = JSON.parse(localStorage.getItem(pageKey) || "{}");

  checkboxes.forEach((checkbox, i) => {
    const key = `checkbox-${i}`;
    if (savedState[key]) checkbox.checked = true;
    checkbox.addEventListener("change", () => {
      savedState[key] = checkbox.checked;
      localStorage.setItem(pageKey, JSON.stringify(savedState));
      atualizarGraficos();
    });
  });

  function calcularProgressoPorNivel() {
    const totais = {};
    const marcados = {};

    checkboxes.forEach((c) => {
      const nivel = c.getAttribute("data-level");
      if (nivel) {
        totais[nivel] = (totais[nivel] || 0) + 1;
        if (c.checked) marcados[nivel] = (marcados[nivel] || 0) + 1;
      }
    });

    return { totais, marcados };
  }

  // 🔹 Gráfico com texto centralizado corretamente
  function criarGrafico(id, marcados, totais) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");

    const centerTextPlugin = {
      id: "centerText",
      afterDraw(chart) {
        const {
          ctx,
          chartArea: { width, height, left, top },
        } = chart;
        ctx.save();

        const dataset = chart.data.datasets[0].data;
        const total = dataset[0] + dataset[1];
        const percentual = total === 0 ? 0 : Math.round((dataset[0] / total) * 100);

        // 🔹 Centraliza o texto no "buraco" do gráfico
        const x = left + width / 2;
        const y = top + height / 2;

        ctx.font = "bold 18pt sans-serif";
        ctx.fillStyle = "#000"; // preto (podemos adaptar pro modo escuro depois)
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${percentual}%`, x, y);
        ctx.restore();
      },
    };

    Chart.register(centerTextPlugin);

    return new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Concluído", "Pendente"],
        datasets: [
          {
            data: [marcados, totais - marcados],
            backgroundColor: [corPrincipal, corPendente],
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutout: "70%", // 🔹 aumenta o "buraco" central para o texto caber
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: `(${marcados}/${totais})`,
            font: { size: 13 },
          },
          legend: { display: false },
        },
      },
    });
  }

  const graficos = {};

  function gerarGraficos() {
    const { totais, marcados } = calcularProgressoPorNivel();

    Object.keys(totais).forEach((nivel) => {
      const id = "grafico" + nivel;
      const grafico = criarGrafico(id, marcados[nivel] ?? 0, totais[nivel] ?? 0);
      if (grafico) graficos[nivel] = grafico;
    });
  }

  function atualizarGraficos() {
    const { totais, marcados } = calcularProgressoPorNivel();

    Object.keys(graficos).forEach((nivel) => {
      const grafico = graficos[nivel];
      if (grafico) {
        grafico.data.datasets[0].data = [
          marcados[nivel] ?? 0,
          (totais[nivel] ?? 0) - (marcados[nivel] ?? 0),
        ];
        grafico.options.plugins.title.text = `(${marcados[nivel] ?? 0}/${totais[nivel] ?? 0})`;
        grafico.update();
      }
    });
  }

  gerarGraficos();
});
