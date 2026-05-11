/* =========================================
   MENSAJE DE BIENVENIDA
========================================= */

/* Cuando la página cargue */
window.onload = function(){

    /* Muestra un mensaje al usuario */
    alert("Bienvenido a la página de Arquitectura de Software");

}

/* =========================================
   EFECTOS DE SCROLL PARA EL MENÚ
========================================= */

/* Selecciona el menú de navegación */
const menu = document.querySelector('nav');

/* Detecta cuando el usuario hace scroll */
window.addEventListener('scroll', () => {

    /* Si baja más de 50px */
    if(window.scrollY > 50){

        /* Cambia el color del menú */
        menu.style.backgroundColor = 'rgba(75, 0, 130, 0.95)';

        /* Agrega sombra */
        menu.style.boxShadow = '0px 4px 12px rgba(0,0,0,0.3)';

        /* Reduce el padding */
        menu.style.padding = '10px';

    }else{

        /* Regresa al color original */
        menu.style.backgroundColor = 'rgba(75, 0, 130, 0.85)';

        /* Elimina sombra */
        menu.style.boxShadow = 'none';

        /* Padding original */
        menu.style.padding = '15px';
    }

});

/* =========================================
   EFECTO HOVER EN LOS ENLACES
========================================= */

/* Selecciona todos los enlaces */
const enlaces = document.querySelectorAll('nav a');

/* Recorre cada enlace */
enlaces.forEach((enlace) => {

    /* Cuando el mouse entra */
    enlace.addEventListener('mouseenter', () => {

        enlace.style.transform = 'scale(1.1)';

    });

    /* Cuando el mouse sale */
    enlace.addEventListener('mouseleave', () => {

        enlace.style.transform = 'scale(1)';

    });

});

/* =========================================
   SUAVIDAD EN ENLACES INTERNOS
========================================= */

/* Detecta clics en enlaces del menú */
document.querySelectorAll('nav a').forEach(enlace => {

    enlace.addEventListener('click', function(e){

        /* Obtiene el enlace */
        const href = this.getAttribute('href');

        /* Solo funciona con IDs internos */
        if(href.startsWith('#')){

            /* Evita salto brusco */
            e.preventDefault();

            /* Desplazamiento suave */
            document.querySelector(href).scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});

/* =========================================
   EFECTO DE APARICIÓN EN CONTENIDO
========================================= */

/* Selecciona todas las secciones */
const secciones = document.querySelectorAll('.contenido');

/* Función para mostrar elementos */
function mostrarSecciones(){

    /* Recorre cada sección */
    secciones.forEach((seccion) => {

        /* Posición de la sección */
        const posicion = seccion.getBoundingClientRect().top;

        /* Altura de pantalla */
        const pantalla = window.innerHeight;

        /* Si aparece en pantalla */
        if(posicion < pantalla - 100){

            /* Hace visible la sección */
            seccion.style.opacity = '1';

            seccion.style.transform = 'translateY(0px)';

        }

    });

}

/* Estilo inicial */
secciones.forEach((seccion) => {

    seccion.style.opacity = '0';

    seccion.style.transform = 'translateY(50px)';

    seccion.style.transition = 'all 1s ease';

});

/* Detecta scroll */
window.addEventListener('scroll', mostrarSecciones);

/* Ejecuta al cargar */
mostrarSecciones(); 