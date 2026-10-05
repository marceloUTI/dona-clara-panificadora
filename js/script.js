document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const filters = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".menu-item");
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
      const category = filter.dataset.filter;
      items.forEach(item => {
        item.style.display = category === "todos" || item.dataset.category === category ? "" : "none";
      });
    });
  });

  const form = document.getElementById("orderForm");
  const modal = document.getElementById("modal");
  const summary = document.getElementById("summary");
  const close = document.querySelector(".close");
  const whatsappBtn = document.getElementById("whatsappBtn");

  if (form) {
    const params = new URLSearchParams(location.search);
    const produto = params.get("produto");
    if (produto) document.getElementById("produtos").value = produto + " — quantidade: 1";

    form.addEventListener("submit", e => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      const telefone = document.getElementById("telefone").value;
      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;
      const tipo = document.getElementById("tipo").value;
      const produtos = document.getElementById("produtos").value;
      const obs = document.getElementById("obs").value || "Nenhuma";

      const dataFormatada = data.split("-").reverse().join("/");
      summary.innerHTML = `
        <div class="summary-line"><strong>Cliente:</strong> ${escapeHTML(nome)}</div>
        <div class="summary-line"><strong>WhatsApp:</strong> ${escapeHTML(telefone)}</div>
        <div class="summary-line"><strong>Retirada:</strong> ${dataFormatada} às ${escapeHTML(hora)}</div>
        <div class="summary-line"><strong>Tipo:</strong> ${escapeHTML(tipo)}</div>
        <div class="summary-line"><strong>Produtos:</strong> ${escapeHTML(produtos)}</div>
        <div class="summary-line"><strong>Observações:</strong> ${escapeHTML(obs)}</div>`;

      const msg = `Olá, Dona Clara! Gostaria de confirmar uma encomenda.%0A%0ACliente: ${encodeURIComponent(nome)}%0AWhatsApp: ${encodeURIComponent(telefone)}%0ARetirada: ${encodeURIComponent(dataFormatada + " às " + hora)}%0ATipo: ${encodeURIComponent(tipo)}%0AProdutos: ${encodeURIComponent(produtos)}%0AObservações: ${encodeURIComponent(obs)}`;
      whatsappBtn.href = `https://wa.me/5541999999999?text=${msg}`;
      modal.classList.add("show");
    });
  }
  if (close) close.addEventListener("click", () => modal.classList.remove("show"));
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}