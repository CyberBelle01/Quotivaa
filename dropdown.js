
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const button = document.querySelector(".button1");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    button.classList.toggle("active");
});





