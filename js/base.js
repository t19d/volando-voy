function desplegarMenu() {
        let element = document.getElementsByClassName("menuNavegacionPrincipal")[0];
    if (document.getElementsByClassName("menuDesplegado").length == 1) {
        element.className = "menuNavegacionPrincipal";
    } else {
        element.classList.add("menuDesplegado");
    }
}
