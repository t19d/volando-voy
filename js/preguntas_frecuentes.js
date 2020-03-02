$(document).ready(function () {
    $(".pregunta").click(function () {
        let img = $(this).children("img");
        if (img.attr("src") == "../assets/img/icons/arrow_down_white.png") {
            //Resetear el slide a todas las preguntas
            $(".respuesta").slideUp();

            $(".respuesta").prev().children("img").attr("src", 
            $(".respuesta").prev().children("img").attr("src").replace("../assets/img/icons/arrow_up_white.png",
                "../assets/img/icons/arrow_down_white.png"));

            //Cambiar el icono
            img.attr("src", img.attr("src").replace("../assets/img/icons/arrow_down_white.png",
                "../assets/img/icons/arrow_up_white.png"));
        } else {
            //Cambiar el icono
            img.attr("src", img.attr("src").replace("../assets/img/icons/arrow_up_white.png",
                "../assets/img/icons/arrow_down_white.png"));
        }
        $(this).next().slideToggle();
    });
});
