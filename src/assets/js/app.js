fun = (a) => {
    return a;
}


let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let close = document.querySelector('.close');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        burger.classList.add('close')
    } else {
        burger.classList.remove('close')
    }
});