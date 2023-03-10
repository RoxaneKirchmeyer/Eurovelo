let btnBurger = document.querySelector("#btn-burger");

let navBar = document.querySelector("#navIndex");

let navItineraire = document.querySelector(".navShadow");


btnBurger.addEventListener("click", () => {
    // Code à effectuer si l'utilisateur clique sur btnBurger
    navBar.classList.toggle("visible");
}
)
btnBurger.addEventListener("click", () => {
    navItineraire.classList.toggle("visible");
})