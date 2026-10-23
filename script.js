document.addEventListener("DOMContentLoaded", () => {
  const current = document.body.dataset.page;

  document.querySelectorAll(".links a").forEach(a => {
    if (a.dataset.page === current) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });

  const menu = document.querySelector(".menu");
  const links = document.querySelector(".links");

  if (menu && links) {
    menu.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const n = document.getElementById("name").value.trim();
      const mail = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      document.getElementById("formMessage").textContent =
        "Opening your email app to prepare the message…";

      location.href =
        "mailto:d90802455@gmail.com?subject=" +
        encodeURIComponent("Portfolio message from " + n) +
        "&body=" +
        encodeURIComponent(
          "Name: " + n + "\nEmail: " + mail + "\n\n" + msg
        );
    });
  }
});