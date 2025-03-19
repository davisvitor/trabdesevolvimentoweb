const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o tema está salvo no LocalStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    body.classList.remove('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

// Alterna entre os temas claro e escuro
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Alternar o texto do "Sobre Mim"
document.getElementById('change-text').addEventListener('click', () => {
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle.innerText === "Sobre Mim") {
        aboutTitle.innerText = "Minha História Profissional";
    } else {
        aboutTitle.innerText = "Sobre Mim";
    }
});

// Alternar a imagem de fundo do Hero
document.getElementById('change-bg').addEventListener('click', () => {
    const hero = document.getElementById('hero');
    if (hero.style.backgroundImage.includes("ff0000")) {
        hero.style.backgroundImage = "url('https://via.placeholder.com/1600x900')";
    } else {
        hero.style.backgroundImage = "url('https://via.placeholder.com/1600x900/ff0000/ffffff?text=Novo+Fundo')";
    }
});

// Alternar cor de fundo das seções "Projetos" e "Habilidades"
document.getElementById('change-style').addEventListener('click', () => {
    const projects = document.getElementById('projects');
    const skills = document.getElementById('skills');
    const newColor = "#ff5733";
    const defaultColor = "";

    projects.style.backgroundColor = projects.style.backgroundColor === newColor ? defaultColor : newColor;
    skills.style.backgroundColor = skills.style.backgroundColor === newColor ? defaultColor : newColor;
});

// Alternar visibilidade da seção "Projetos"
document.getElementById('toggle-projects').addEventListener('click', () => {
    const projects = document.getElementById('projects');
    projects.style.display = projects.style.display === "none" ? "block" : "none";
});
