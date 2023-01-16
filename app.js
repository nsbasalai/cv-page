let burgerButton = document.querySelector('.header__button');

burgerButton.addEventListener('click', () => {
    document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu_hidden')
})

const leftButton = document.querySelector('.about__arrow__left');
const rightButton = document.querySelector('.about__arrow__right');
const images = document.querySelectorAll('.about__image-wrapper');
const aboutButton = document.querySelector('.about__button');
const seriesDescriptions = document.querySelectorAll('.about__image-description')
let i = 0;

rightButton.addEventListener('click', () => {
    seriesDescriptions.forEach(element => {
        if (!element.classList.contains('about__image-description_hidden')) {
            element.classList.add('about__image-description_hidden');
            element.previousElementSibling.style.opacity = '1';
            element.previousElementSibling.querySelector('.about__image').classList.remove('about__image_dark');
        }
    });
    i = i + 1;
    if (i >= images.length) {
        images[i - 1].classList.add('about__image-wrapper_hidden');
        i = 0;
        images[i].classList.remove('about__image-wrapper_hidden')
    } else {
        images[i - 1].classList.add('about__image-wrapper_hidden');
        images[i].classList.remove('about__image-wrapper_hidden')
    }
})

leftButton.addEventListener('click', () => {
    i = i - 1;
    seriesDescriptions.forEach(element => {
        if (!element.classList.contains('about__image-description_hidden')) {
            element.classList.add('about__image-description_hidden');
            element.previousElementSibling.querySelector('.about__image').classList.remove('about__image_dark');
        }
    });
    if (i < 0) {
        images[i + 1].classList.add('about__image-wrapper_hidden');
        i = images.length - 1;
        images[i].classList.remove('about__image-wrapper_hidden')
    } else {
        images[i + 1].classList.add('about__image-wrapper_hidden');
        images[i].classList.remove('about__image-wrapper_hidden')
    }
})

aboutButton.addEventListener('click', () => {
    seriesDescriptions.forEach(element => {
        element.classList.toggle('about__image-description_hidden');
        element.previousElementSibling.querySelector('.about__image').classList.toggle('about__image_dark')
    });
})