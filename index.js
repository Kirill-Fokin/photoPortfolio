const burger = document.querySelector('.header__burger-btn')
const header = document.querySelector('.header')
burger.addEventListener('click', () => header.classList.toggle('open'))



let mail = document.querySelector('.mail')
mail.addEventListener('click', () => console.log('mail'))


function creareMailForm() {
  let form = document.createElement('div')
  form.classList.add('mail-form')
}