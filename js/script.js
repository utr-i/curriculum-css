document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});

document.querySelectorAll('#navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
