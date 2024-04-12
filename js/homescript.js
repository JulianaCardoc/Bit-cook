// CAPTURA DE ELEMENTOS HTML PARA MANIPULACIÓN 
let darkMode = false;
let modeButton = document.querySelector(".dark-mode-button");
let iconElement = modeButton.querySelector("i.material-symbols-outlined");
let body = document.querySelector("body");
let cards = document.getElementsByClassName("miniature");
let allTitles = document.querySelectorAll(".lm-titles");
let allTxts = document.querySelectorAll(".lm-txt");

// FUNCIÓN PARA ACTIVAR Y DESACTIVAR LOS ESTILOS DEL DARK MODE
function togglePageMode() {
    // TOGGLE PARA CAMBIAR EL ESTILO DEL BODY
    body.classList.toggle("dm-body");
    // CONDICIONAL PARA DETERMINAR SI EL DARK MODE ESTÁ ACTIVO O NO
    if (!darkMode) {
        // MODIFICACIÓN DEL LLAMADO A MATERIAL-SYMBOLS EN EL BOTÓN
        iconElement.textContent = "light_mode";
        // CICLOS FOR PARA RECORRER ARRAYS DE ELEMENTOS CON LA MISMA CLASE
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("lm-card-bg");
            cards[i].classList.add("dm-card-bg");
        }
        for (let i = 0; i < allTitles.length; i++) {
            allTitles[i].classList.remove("lm-titles");
            allTitles[i].classList.add("dm-titlesntxt");
        }
        for (let i = 0; i < allTxts.length; i++) {
            allTxts[i].classList.remove("lm-txt");
            allTxts[i].classList.add("dm-titlesntxt");
        }
        darkMode = true;
    } else {
        iconElement.textContent = "dark_mode";
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("dm-card-bg");
            cards[i].classList.add("lm-card-bg");
        }
        for (let i = 0; i < allTitles.length; i++) {
            allTitles[i].classList.remove("dm-titlesntxt");
            allTitles[i].classList.add("lm-titles");
        }
        for (let i = 0; i < allTxts.length; i++) {
            allTxts[i].classList.remove("dm-titlesntxt");
            allTxts[i].classList.add("lm-txt");
        }
        darkMode = false;
    }
}
// EVENTO DE ESCUCHA PARA EL CLICK EN EL BOTÓN QUE ACTIVA O DESACTIVA EL DARK MODE
modeButton.addEventListener("click", () => {
    togglePageMode();
})