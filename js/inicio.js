var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (window.matchMedia("(min-width: 767px)").matches) {
        var i;
        var slides = document.getElementsByClassName("imagenesSlideshow");
        var puntoPosicionSlideshows = document.getElementsByClassName("puntoPosicionSlideshow");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < puntoPosicionSlideshows.length; i++) {
            puntoPosicionSlideshows[i].className = puntoPosicionSlideshows[i].className.replace(" imagenActivaSlideshow", "");
        }
        slides[slideIndex - 1].style.display = "block";
        puntoPosicionSlideshows[slideIndex - 1].className += " imagenActivaSlideshow";
    }
}

$(document).ready(function() {
    $(".izquierda").click(function() {
        plusSlides(-1);
    });
    $(".derecha").click(function() {
        plusSlides(1);
    });
});