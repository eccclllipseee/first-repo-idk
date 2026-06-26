
console.log("Скрипт подключен и работает.");

const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open"); 
});
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
    extraInfo.classList.toggle("expanded");
    if (extraInfo.classList.contains("expanded")) {
        toggleBtn.textContent = "Скрыть";
    } else {
        toggleBtn.textContent = "Показать больше";
    }
});
