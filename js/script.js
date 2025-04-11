/* Abrir menu (navbar) */
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

/* Cerrar el menu (navbar)*/
document.addEventListener('click', (event) => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-menu');

    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});