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
