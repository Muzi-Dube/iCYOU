export function menuToggleHandler(){

    const menu = document.querySelector('.js-menu-out');
    const menuBtn = document.querySelector('.js-menu-btn');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu-container');
    });
}