

const url = "http://90.110.218.245:5001";
const url_article = "/api/itineraires";
const url_img = "?populate=*";

function creer_itineraires(data){
    body = document.querySelector("body");

    let container = document.getElementById('itineraire')

    data = data.data;
    for (const etape of data) {
        etapeContainer = document.createElement("div");
        container.appendChild(etapeContainer);

        img = document.createElement("img");
        etapeContainer.appendChild(img);
        img.src = url + etape.attributes.Photos.data.attributes.url;
        
        titre = document.createElement("h2");
        titre.innerText = etape.attributes.Nom;
        etapeContainer.appendChild(titre);

        /* texte = document.createElement("p");
        texte.innerText = etape.attributes.Descriptif;
        etapeContainer.appendChild(texte); */

        


       /*  distance = document.createElement("p");
        distance.innerText = "Distance d'étape " + etape.attributes.Distance + " km";
        etapeContainer.appendChild(distance); */
/* 
        gpx = document.createElement("gpx");
        gpx. */

    }



}
  
function get_articles(){
    console.log(url+url_article+url_img)
    fetch(url+url_article+url_img)
    .then(response => response.json())
    .then(response => creer_itineraires(response))
    .catch(error => alert("Erreur : " + error));
}

get_articles();

/* _______________________________________________________________________________________
const url = "http://localhost:1337";
const url_article = "/api/articles";
const url_img = "?populate=*";

function creer_article(data){
    body = document.querySelector("body");


    data = data.data;
    for (const article of data) {
        article_html = document.createElement("article");
        body.appendChild(article_html);

        titre = document.createElement("h1");
        titre.innerText = article.attributes.Titre;
        article_html.appendChild(titre)

        img = document.createElement("img");
        img.src = url + article.attributes.Couverture.data.attributes.formats.large.url;
        article_html.appendChild(img)
    }
}

function get_articles(){
    console.log(url+url_article+url_img)
    fetch(url+url_article+url_img)
    .then(response => response.json())
    .then(response => creer_article(response))
    .catch(error => alert("Erreur : " + error));
}

get_articles(); */