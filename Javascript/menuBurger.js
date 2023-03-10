let btnBurger = document.querySelector("#btn-burger");

let navBar = document.querySelector("#navIndex");


btnBurger.addEventListener("click", () => {
    // Code à effectuer si l'utilisateur clique sur btnBurger
    navBar.classList.toggle("visible");
}
)