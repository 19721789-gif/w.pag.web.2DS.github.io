/* =========================================
   EFECTOS DE SCROLL PARA EL MENÚ
   ========================================= */

// Seleccionamos el elemento nav
const menu = document.querySelector('nav');

/**
 * Función que detecta el scroll y cambia el fondo del menú
 */
window.addEventListener('scroll', () => {
    // Si el usuario baja más de 50px...
    if (window.scrollY > 50) {
        // Cambiamos el fondo a un color sólido (ej: azul oscuro del footer)
        menu.style.backgroundColor = 'rgba(5, 43, 150, 0.9)'; 
        menu.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        // Si vuelve arriba, regresa a transparente
        menu.style.backgroundColor = 'transparent';
        menu.style.boxShadow = 'none';
    }
});

/* =========================================
   SUAVIDAD EN ENLACES INTERNOS (Opcional)
   ========================================= */

// Esto hace que al hacer clic en el menú, la página baje suavemente
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Solo si el enlace lleva a un ID interno (ej: #contacto)
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});