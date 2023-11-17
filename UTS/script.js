// You can add JavaScript functionalities here if needed
const navbarList = document.querySelector(".navbar-list")
const menuBtn = document.querySelector(".hamburger-menu")

menuBtn.addEventListener("click", () => {
    navbarList.classList.toggle("show")
})