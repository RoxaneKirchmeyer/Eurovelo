let searchIcon = document.querySelector("#searchIcon");
let searchMenu = document.querySelector(".searchMenu")

function openingMenu() {
    searchIcon.classList.toggle("fa-xmark");
    searchMenu.classList.toggle("visible");
}

searchIcon.addEventListener("click", openingMenu)