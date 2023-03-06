let search = document.querySelector("#search");
let searchMenu = document.querySelector(".searchMenu")

function openingMenu() {
    search.classList.toggle("fa-xmark");
    searchMenu.classList.toggle("visible");
}

search.addEventListener("click", openingMenu)