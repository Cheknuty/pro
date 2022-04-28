const elBox = document.querySelector('.site-header__menu')
const elBtn = document.querySelector('.site-header__toggle')

elBtn.addEventListener('click', () => {
    elBox.classList.toggle("site-header__menu--active")
})