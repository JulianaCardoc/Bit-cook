let darkMode = false;
let modeButton = document.querySelector(".dark-mode-button");
let iconElement = modeButton.querySelector("i.material-symbols-outlined");
let body = document.querySelector("body");
let rcpBoxes = document.getElementsByClassName("boxes");
let prepCard = document.getElementsByClassName("preparation-time");
let allTitles = document.querySelectorAll(".lm-titles");
let allTxts = document.querySelectorAll(".lm-txt");
let firstTds = document.querySelectorAll(".lm-f-td");
let secondTds = document.querySelectorAll(".lm-s-td"); 

function togglePageMode() {
    body.classList.toggle("dm-body");
    if (!darkMode) {
        prepCard[0].classList.remove("lm-prep-time");
        prepCard[0].classList.add("dm-prep-time");
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
        for (let i = 0; i < firstTds.length; i++) {
            firstTds[i].classList.remove("lm-f-td");
            firstTds[i].classList.add("dm-td");
        }
        for (let i = 0; i < secondTds.length; i++) {
            secondTds[i].classList.remove("lm-s-td");
            secondTds[i].classList.add("dm-td");
        }
        
        darkMode = true;
    } else {
        prepCard[0].classList.remove("dm-prep-time");
        prepCard[0].classList.add("lm-prep-time");
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
        for (let i = 0; i < firstTds.length; i++) {
            firstTds[i].classList.remove("dm-td");
            firstTds[i].classList.add("lm-f-td");
        }
        for (let i = 0; i < secondTds.length; i++) {
            secondTds[i].classList.remove("dm-td");
            secondTds[i].classList.add("lm-s-td");
        }
        darkMode = false;
    }
}
modeButton.addEventListener("click", () => {
    togglePageMode();
})