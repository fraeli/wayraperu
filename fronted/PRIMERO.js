document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const indicatorsContainer = document.querySelector(".indicators");

    let currentIndex = 0;

    // Crear indicadores dinámicamente
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
        slides.forEach(slide => slide.style.display = "none");
        // Mostrar solo la diapositiva actual
        slides[currentIndex].style.display = "block";

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

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Inicializar el slider mostrando solo la primera imagen
    updateSlider();

    // Auto-slide cada 5 segundos
    setInterval(nextSlide, 5000);
});
