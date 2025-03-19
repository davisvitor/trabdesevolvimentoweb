const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o tema está salvo
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    body.classList.remove('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

// Alterna entre os temas
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

// Alterar conteúdo de um elemento
document.getElementById('change-text').addEventListener('click', () => {
    document.querySelector('#about h2').innerText = "Minha História Profissional";
});

// Alterar atributo de um elemento
document.getElementById('change-bg').addEventListener('click', () => {
    document.getElementById('hero').style.backgroundImage = "url('https://via.placeholder.com/1600x900/ff0000/ffffff?text=Novo+Fundo')";
});

// Alterar estilos CSS
document.getElementById('change-style').addEventListener('click', () => {
    document.getElementById('projects').style.backgroundColor = "#ff5733";
    document.getElementById('skills').style.backgroundColor = "#ff5733";
});

// Ocultar/Exibir elementos
document.getElementById('toggle-projects').addEventListener('click', () => {
    const projects = document.getElementById('projects');
    projects.style.display = projects.style.display === "none" ? "block" : "none";
});
