
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

const projects = [
    { id: 1, title: "Лендинг кофейни", category: "frontend", description: "Адаптивная вёрстка на CSS Grid и Flexbox." },
    { id: 2, title: "Бот Telegram", category: "backend", description: "Скрипт для автоматической обработки заказов." },
    { id: 3, title: "Игра 2048", category: "frontend", description: "Полноценная игровая логика на JavaScript." },
    { id: 4, title: "API Корзины товаров", category: "backend", description: "Серверная валидация данных и отправка JSON." },
    { id: 5, title: "Сайт-портфолио", category: "frontend", description: "Текущий проект" }
];


function createCard(project) {
    return `
    <article class="project-card" data-category="${project.category}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    </article>
    `;
}

function renderProjects(list) {
    const container = document.getElementById("projects-grid");
    if (container) {
        container.innerHTML = list.map(createCard).join("");
    }
}

renderProjects(projects);

const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const filter = btn.dataset.filter;
        const filtered = filter === "all" 
            ? projects 
            : projects.filter(p => p.category === filter);
            
        renderProjects(filtered);
    });
});

const searchInput = document.getElementById("search-input");
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        const filtered = projects.filter(p => 
            p.title.toLowerCase().includes(query)
        );
        renderProjects(filtered);
    });
}
