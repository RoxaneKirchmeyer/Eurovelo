let btnBurger = document.querySelector("#btn-burger");

let navPro = document.querySelector(".mediaPro");

let navBar = document.querySelector("#navIndex");

let navResponsive = document.querySelector("#navResponsive")


btnBurger.addEventListener("click", () => {
    // Code à effectuer si l'utilisateur clique sur btnBurger
    navResponsive.classList.toggle("visible");
}
)