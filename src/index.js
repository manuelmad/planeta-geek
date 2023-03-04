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