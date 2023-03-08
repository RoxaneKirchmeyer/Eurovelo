
const divNavbar = document.querySelector(".mediaPro");
const navIndex = document.querySelector("#navIndex");
const scrollPosition = 0;


function scrollEvent() {
    if (scrollPosition == scrollY){
        divNavbar.classList.remove("mediaProNone")
        divNavbar.classList.add("mediaPro")
        navIndex.classList.remove("navShadowIndex")
    }
    else{
        divNavbar.classList.remove("mediaPro")
        divNavbar.classList.add("mediaProNone")
        navIndex.classList.add("navShadowIndex")
    }
}

document.addEventListener("scroll", scrollEvent)
