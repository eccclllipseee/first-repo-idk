
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

console.log("Привет! Скрипт подключен и работает.");

const dateSpan = document.getElementById("update-date");
if (dateSpan) {
    const today = new Date();
    dateSpan.textContent = today.toLocaleDateString("ru-RU");
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.querySelector("nav");
if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");
if (toggleBtn && extraInfo) {
    toggleBtn.addEventListener("click", () => {
        extraInfo.classList.toggle("expanded");
        toggleBtn.textContent = extraInfo.classList.contains("expanded") ? "Скрыть" : "Показать больше";
    });
}
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}


const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        
        let isValid = true;
        
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Введите имя";
            isValid = false;
        } else {
            nameError.textContent = "";
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Введите корректный email";
            isValid = false;
        } else {
            emailError.textContent = "";
        }
        
        if (isValid) {
            alert("Форма заполнена верно!");
            form.reset(); 
        }
    });
}
