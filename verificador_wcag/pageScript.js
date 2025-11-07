window.addEventListener("message", async (event) => {
  if (event.data.type !== "RUN_AXE") return;

  console.log("▶️ pageScript: rodando axe...");

  if (typeof window.axe === "undefined") {
    console.error("❌ axe não encontrado!");
    window.postMessage({ type: "AXE_RESULTS", results: null });
    return;
  }

  try {
    const results = await window.axe.run(document);

    window.postMessage({ type: "AXE_RESULTS", results });
    console.log("✅ pageScript: resultados enviados");
  } catch (err) {
    console.error("❌ erro executando axe", err);
    window.postMessage({ type: "AXE_RESULTS", results: null });
  }
});
