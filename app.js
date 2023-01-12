const leftButton = document.querySelector('.about__arrow__left');
const rightButton = document.querySelector('.about__arrow__right');
const images = document.querySelectorAll('.about__image');
let i = 0;

rightButton.addEventListener('click', () => {
    ++i;
    if (i >= images.length) {
        images[i - 1].classList.add('about__image_hidden');
        i = 0;
        images[i].classList.remove('about__image_hidden')
    } else {
        images[i - 1].classList.add('about__image_hidden');
        images[i].classList.remove('about__image_hidden')
    }
})

leftButton.addEventListener('click', () => {
    i = i - 1;
    if (i < 0) {
        images[i + 1].classList.add('about__image_hidden');
        i = images.length - 1;
        images[i].classList.remove('about__image_hidden')
    } else {
        images[i + 1].classList.add('about__image_hidden');
        images[i].classList.remove('about__image_hidden')
    }
})