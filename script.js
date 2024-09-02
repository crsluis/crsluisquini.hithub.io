document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Scroll behavior for header
    const header = document.querySelector('header');
    let lastScrollTop = 0;


    /*
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-80px';
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;

        // Change header background on scroll
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(19, 16, 15, 0.692)'; // Semi-transparent primary color
           
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });
});

*/


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector('header');

    // Maneja la visibilidad del header al hacer scroll
    if (scrollTop > lastScrollTop) {
        header.style.top = '-80px'; // Oculta el header al hacer scroll hacia abajo
    } else {
        header.style.top = '0'; // Muestra el header al hacer scroll hacia arriba
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos

    // Cambia el fondo del header en función del scroll
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(19, 16, 15, 0.692)'; // Color semi-transparente
    } else {
        header.style.backgroundColor = 'var(--primary-color)'; // Color original
    }
});
});