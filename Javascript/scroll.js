const divNavbar = document.querySelector(".mediaPro");
const navIndex = document.querySelector("#navIndex");
const scrollPosition = 0;
const MenuScroll = document.querySelector("#searchScroll")


function scrollEvent() {
    if (scrollPosition == scrollY){
        divNavbar.classList.remove("mediaProNone")
        divNavbar.classList.add("mediaPro")
        navIndex.classList.remove("navShadowIndex")
        MenuScroll.classList.remove("searchMenuItineraire")
        MenuScroll.classList.add("searchMenuItineraireTop")
        
    }
    else{
        divNavbar.classList.remove("mediaPro")
        divNavbar.classList.add("mediaProNone")
        navIndex.classList.add("navShadowIndex")
        MenuScroll.classList.add("searchMenuItineraire")
        MenuScroll.classList.remove("searchMenuItineraireTop")
    }
}

document.addEventListener("scroll", scrollEvent)
