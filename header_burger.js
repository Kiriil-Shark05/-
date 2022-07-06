
let headerBurger = document.querySelector('.header_burger');

let headerMenu = document.querySelector('.header_menu');

let bodyTag = document.querySelector('body');

headerBurger.addEventListener('click', e => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    bodyTag.classList.toggle('lock');
});
