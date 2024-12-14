// Swiper initialization
var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        if (thisSwiper && thisSwiper.swiper) {
            thisSwiper.swiper.update();
        } else {
            console.error('Swiper not found for ID:', id);
        }
    });
});

// Login functionality
document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Funcionalidad de inicio de sesión pendiente de implementación.");
    // Aquí podrías agregar un modal de inicio de sesión o redirigir a una página de inicio de sesión.
});

// Cart functionality
document.getElementById("cart").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Funcionalidad del carrito pendiente de implementación.");
    // Aquí podrías agregar un modal del carrito o redirigir a una página del carrito.
});
