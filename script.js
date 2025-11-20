 // Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close nav when a link is clicked (mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple fake submit handling (front-end only)
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent =
      "Thank you! Your message has been recorded. We’ll get back to you shortly.";
    formNote.style.color = "#16a34a";
    form.reset();
  });
}
