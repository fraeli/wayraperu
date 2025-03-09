document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const indicatorsContainer = document.querySelector(".indicators");

    let currentIndex = 0;
    let autoSlideInterval = setInterval(nextSlide, 5000); // Solo definirlo una vez

    // Detener auto-slide al hacer clic
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

    // Crear indicadores dinámicamente
    slides.forEach((_, index) => {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        if (index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll(".indicator");

    function updateSlider() {
        // Ocultar todas las diapositivas (configurarlas como invisibles)
        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        // Mostrar solo la diapositiva actual
        slides[currentIndex].classList.add("active");

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



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(card => observer.observe(card));
});


particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        move: { speed: 2, direction: "none", out_mode: "out" }
    }
});

