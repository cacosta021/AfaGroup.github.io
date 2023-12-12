const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    body.classList.add("body-no-scroll"); // Agrega clase para desactivar el desplazamiento
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
    body.classList.remove("body-no-scroll"); // Remueve la clase para habilitar el desplazamiento
  }
});


$(document).ready(function () {
  $('.accordion-title').click(function () {
      $(this).next('.accordion-content').slideToggle();
      $(this).parent().toggleClass('open');
      $('.accordion-content').not($(this).next()).slideUp();
      $('.accordion-item').not($(this).parent()).removeClass('open');
  });
});


$(document).ready(function() {
  $('.redirigir-nosotros').click(function() {
    window.location.href = './html/nosotros.html';
  });
});
