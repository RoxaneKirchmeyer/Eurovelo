// Variables
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const indexHeader = document.querySelector(".headerIndex");
const imagesTable = 
[
    {image : "images/reserve.jpg"},
    {image : "images/img-foret.jpeg"},
    {image : "images/img-nature.jpeg"},
    {image : "images/marianna-lutkova.jpg"},
    {image : "images/zoltan-tasi.jpg"},
    {image : "images/eddy-lackmann.jpg"}
    
]
let slides = 0;

// Fonctions

function nextSlide (){
    indexHeader.style.backgroundImage = "url(" + imagesTable[slides].image + ")"; 
    if (slides == imagesTable.length-1) {
    slides = 0
    }
    
    else {
        slides++
    }
}

function previousSlide (){
    indexHeader.style.backgroundImage = "url(" + imagesTable[slides].image + ")"; 
    if (slides == 0) {
    slides = imagesTable.length-1
    }
    
    else {
        slides--
    }
}

function autoPlay (){
    myInterval = setInterval(nextSlide,4000)
}

// Evenements
window.onload = autoPlay();

rightButton.addEventListener("click", () =>
    {
        nextSlide();
        clearInterval(myInterval);
        autoPlay();
    }
)

leftButton.addEventListener("click", () =>
    {
        previousSlide();
        clearInterval(myInterval);
        autoPlay();
    }
) 