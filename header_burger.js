
let headerBurger = document.querySelector('.header_burger');

let headerMenu = document.querySelector('.header_menu');

let body = document.querySelector('body');

headerBurger.addEventListener('click', e => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});
