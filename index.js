const burger = document.querySelector('.header__burger-btn')
const header = document.querySelector('.header')
burger.addEventListener('click', () => header.classList.toggle('open'))