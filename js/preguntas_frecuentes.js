$(document).ready(function () {
    $(".pregunta").click(function () {
        let img = $(this).children("img");
        if (img.attr("src") == "../assets/img/icons/arrow_down_black.png") {
            //Resetear el slide a todas las preguntas
            $(".respuesta").slideUp();

            $(".respuesta").prev().children("img").attr("src", 
            $(".respuesta").prev().children("img").attr("src").replace("../assets/img/icons/arrow_up_black.png",
                "../assets/img/icons/arrow_down_black.png"));

            //Cambiar el icono
            img.attr("src", img.attr("src").replace("../assets/img/icons/arrow_down_black.png",
                "../assets/img/icons/arrow_up_black.png"));
        } else {
            //Cambiar el icono
            img.attr("src", img.attr("src").replace("../assets/img/icons/arrow_up_black.png",
                "../assets/img/icons/arrow_down_black.png"));
        }
        $(this).next().slideToggle();
    });
});
