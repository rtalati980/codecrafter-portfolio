// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Portfolio tab filtering
const tabBtns = document.querySelectorAll(".tab-btn");
const demoCards = document.querySelectorAll(".demo-card");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    demoCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Contact form - send to WhatsApp + FormSubmit
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name    = document.getElementById("name")?.value || "";
    const email   = document.getElementById("email")?.value || "";
    const service = document.getElementById("service")?.value || "";
    const budget  = document.getElementById("budget")?.value || "";
    const message = document.getElementById("message")?.value || "";

    // Send to FormSubmit email
    const formData = new FormData(form);
    fetch("https://formsubmit.co/ronakjain980@gmail.com", {
      method: "POST",
      body: formData,
    }).catch(() => {});

    // Open WhatsApp with lead details
    const text = encodeURIComponent(
      `New Lead from Website\n---\nName: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\nMessage: ${message}`
    );
    window.open(`https://wa.me/918264171623?text=${text}`, "_blank");

    if (formNote) {
      formNote.textContent = "✅ Submitted! We'll reach out on WhatsApp shortly.";
      formNote.style.color = "#16a34a";
    }
    form.reset();
  });
}