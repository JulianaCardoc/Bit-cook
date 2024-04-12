let darkMode = false;
let modeButton = document.querySelector(".dark-mode-button");
let iconElement = modeButton.querySelector("i.material-symbols-outlined");
let body = document.querySelector("body");
let rcpBoxes = document.getElementsByClassName("boxes");
let allTitles = document.querySelectorAll(".lm-titles");
let allTxts = document.querySelectorAll(".lm-txt");
let inputs = document.querySelectorAll(".lm-input");

function togglePageMode() {
    body.classList.toggle("dm-body");
    if (!darkMode) {
        iconElement.textContent = "light_mode";
        for (let i = 0; i < rcpBoxes.length; i++) {
            rcpBoxes[i].classList.remove("lm-boxes");
            rcpBoxes[i].classList.add("dm-boxes");
        }
        for (let i = 0; i < allTitles.length; i++) {
            allTitles[i].classList.remove("lm-titles");
            allTitles[i].classList.add("dm-titlesntxt");
        }
        for (let i = 0; i < allTxts.length; i++) {
            allTxts[i].classList.remove("lm-txt");
            allTxts[i].classList.add("dm-titlesntxt");
        }
        for (let i = 0; i< inputs.length; i++) {
            inputs[i].classList.remove("lm-input");
            inputs[i].classList.add("dm-prep-time");
        }
        darkMode = true;
    } else {
        iconElement.textContent = "dark_mode";
        for (let i = 0; i < rcpBoxes.length; i++) {
            rcpBoxes[i].classList.remove("dm-boxes");
            rcpBoxes[i].classList.add("lm-boxes");
        }
        for (let i = 0; i < allTitles.length; i++) {
            allTitles[i].classList.remove("dm-titlesntxt");
            allTitles[i].classList.add("lm-titles");
        }
        for (let i = 0; i < allTxts.length; i++) {
            allTxts[i].classList.remove("dm-titlesntxt");
            allTxts[i].classList.add("lm-txt");
        }
        for (let i = 0; i< inputs.length; i++) {
            inputs[i].classList.remove("dm-prep-time");
            inputs[i].classList.add("lm-input");
        }
        darkMode = false;
    }
}
modeButton.addEventListener("click", () => {
    togglePageMode();
})