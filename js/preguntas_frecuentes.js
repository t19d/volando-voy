$(document).ready(function () {
    $(".pregunta").click(function () {
        $(".respuesta").slideToggle();
        $(this).children("img").attr("src", $(this).children("img").attr("src").replace("../assets/img/icons/arrow_down_black.png", "../assets/img/icons/arrow_up_black.png"));
    });
});
