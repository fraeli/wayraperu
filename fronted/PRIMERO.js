document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const indicatorsContainer = document.querySelector(".indicators");

    let currentIndex = 0;
    let autoSlideInterval = setInterval(nextSlide, 5000); // Intervalo de auto-slide

    // Detener el auto-slide al hacer clic en los botones
    prevBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval); // Detener el auto-slide
        prevSlide();
        autoSlideInterval = setInterval(nextSlide, 5000); // Reiniciar el auto-slide
    });

    nextBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval); // Detener el auto-slide
        nextSlide();
        autoSlideInterval = setInterval(nextSlide, 5000); // Reiniciar el auto-slide
    });

    // Crear los indicadores dinámicamente
    slides.forEach((_, index) => {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator");
        if (index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll(".indicator");

    function updateSlider() {
        // Ocultar todas las diapositivas
        slides.forEach(slide => {
            slide.style.opacity = "0"; // Hacer todas las imágenes invisibles
            slide.style.transition = "opacity 1s ease-in-out"; // Transición suave
        });
        // Mostrar solo la diapositiva actual
        slides[currentIndex].style.opacity = "1"; // Hacer visible la imagen actual

        // Actualizar los indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Inicializar el slider mostrando solo la primera imagen
    updateSlider();
});
