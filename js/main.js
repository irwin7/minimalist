let elMenuBtn = document.querySelector(".site-header__btn__menu")
let elHeader = document.querySelector(".site-header")

  elMenuBtn.addEventListener("click", () => {
    elHeader.classList.toggle("open")
  })