document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector(".nav");
  const navList = document.getElementById("nav-list");
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  // Toggle menú en móviles
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  // Manejar el despliegue de submenús en móviles
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evita la navegación inmediata
      
      const dropdownMenu = this.nextElementSibling;

      if (dropdownMenu && dropdownMenu.classList.contains("dropdown-menu")) {
        dropdownMenu.classList.toggle("visible");

        // Cierra otros submenús abiertos
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.classList.remove("visible");
          }
        });
      }
    });
  });

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      nav.classList.remove("active");
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("visible");
      });
    }
  });
});

