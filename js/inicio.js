if (window.matchMedia("(min-width: 400px)").matches) {
  /* La pantalla tiene al menos 400 píxeles de ancho */
} else {
  /* La pantalla tiene menos de 400 píxeles de ancho */
}

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

/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}*/

$(document).ready(function () {
    $(".izquierda").click(function () {
        plusSlides(-1);
    });
    $(".derecha").click(function () {
        plusSlides(1);
    });
});

