let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slider = document.querySelector('.slider-container');
const slideWidth = document.querySelector('.slide').offsetWidth;
const transitionDuration = 0.8; // Duración de la transición en segundos

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * slideWidth;
    slider.style.transition = `transform ${transitionDuration}s cubic-bezier(0.77, 0, 0.175, 1)`;
    slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function handleTransitionEnd() {
    // Eliminar la transición después de completarla para permitir un desplazamiento infinito
    slider.style.transition = 'none';
    const offset = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
    setTimeout(() => {
        slider.style.transition = `transform ${transitionDuration}s cubic-bezier(0.77, 0, 0.175, 1)`;
    });
}

// Auto avance cada 6 segundos (6000 milisegundos)
setInterval(nextSlide, 6000);

// Manejo de eventos para navegación con teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});

// Agregar un escuchador de eventos para manejar el final de la transición
slider.addEventListener('transitionend', handleTransitionEnd);

// Inicialización para que se vea el primer slide al cargar la página
showSlide(currentSlide);






