// CÓDIGO PARA QUE EL ÍCONO DE MENÚ DESPLEGABLE MUESTRE/OCULTE EL MENÚ
const menu_icon = document.getElementById('menu_icon');
menu_icon.addEventListener('click', interactiveMenu);

const dropdown_menu = document.getElementById('dropdown_menu');
dropdown_menu.style.display = 'none';

function interactiveMenu() {
    if(dropdown_menu.style.display == 'none') {
        dropdown_menu.style.display = 'block';
        menu_icon.style.color = '#03fbfa';
    } else if(dropdown_menu.style.display == 'block') {
        dropdown_menu.style.display = 'none';
        menu_icon.style.color = '#ffffff';
    }
}


// DETECTAR SCROLL Y HACER CRECER EL MENÚ CUANDO BAJAMOS

// Nombre de la clase en CSS que hará crecer al menú
// const desktop = 'desktop';

// Acceder al menú
// const main_nav_bar = document.getElementById('main_nav_bar');

// Evento de scroll sobre la ventana
// window.addEventListener('scroll', showVerticalScroll);

// function showVerticalScroll() {
//     // Detectar el scroll actual
//     let vertical_scroll = window.pageYOffset;

//     // Si el scroll actual está entre 0 y 120, dejar la apariencia original del menú
//     if(window.innerWidth > 700) {
//         if (vertical_scroll >= 0 && vertical_scroll < 120) {
//             main_nav_bar.style.width = '80%';
//             main_nav_bar.classList.remove(desktop);
//         } // Si el scroll es mayor a 120, agregar la clase al menú para que cambie de apariencia
//         else if (vertical_scroll > 120) {
//             main_nav_bar.style.width = '100%';
//             main_nav_bar.classList.add(desktop);
//         }
//     } else {
//         main_nav_bar.classList.remove(desktop);
//     }
// }