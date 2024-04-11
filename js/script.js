let darkMode = false;
let modeButton = document.querySelector(".dark-mode-button");
let iconElement = modeButton.querySelector("i.material-symbols-outlined");
let body = document.querySelector("body");
let cards = document.getElementsByClassName("miniature");

function togglePageMode() {
    body.classList.toggle("dm-body");
    if (!darkMode) {
        iconElement.textContent = "light_mode";
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("lm-card-bg");
            cards[i].classList.add("dm-card-bg");
        }
        darkMode = true;
    } else {
        iconElement.textContent = "dark_mode";
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("dm-card-bg");
            cards[i].classList.add("lm-card-bg");
        }
        darkMode = false;
    }
}
modeButton.addEventListener("click", () => {
    togglePageMode();
})