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
// WhatsApp + Email submit
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value;

    // ✅ Send to Email (existing)
    const formData = new FormData(form);
    fetch("https://formsubmit.co/ronakjain980@gmail.com", {
      method: "POST",
      body: formData,
    });

    // ✅ Send to WhatsApp
    const text = `New Lead:%0A
Name: ${name}%0A
Email: ${email}%0A
Service: ${service}%0A
Budget: ${budget}%0A
Message: ${message}`;

    window.open(`https://wa.me/918264171623?text=${text}`, "_blank");

    form.reset();
  });
}
