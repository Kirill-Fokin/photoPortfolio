const burger = document.querySelector('.header__burger-btn')
const header = document.querySelector('.header')
burger.addEventListener('click', () => header.classList.toggle('open'))


let modal = document.querySelector('.modal')
let modalCloseBtn = document.querySelector('.modal__close-btn')
modalCloseBtn.addEventListener('click', () => modal.classList.remove('open'))


let mail = document.querySelector('.mail')
mail.addEventListener('click', () => modal.classList.add('open') )





function creareMailForm() {
  let form = document.createElement('div')
  form.classList.add('mail-form')
}