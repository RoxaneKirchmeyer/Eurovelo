const url = "http://localhost:1337";
const url_article = "/api/etapes";
const url_img = "?populate=*";

// Création map
var map = L.map("map").setView([50.72374, 2.53729], 9);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function creer_itineraires(data) {
  body = document.querySelector("body");

  let container = document.getElementById("itineraire");
  let popup = document.querySelector(".popup");
  let overlay = document.querySelector(".overlay");

  overlay.addEventListener("click", function (e) {
    popup.classList.toggle("visible");
    overlay.classList.toggle("visible");
  });

  data = data.data;
  for (const etape of data) {
    etapeContainer = document.createElement("div");
    container.appendChild(etapeContainer);
    etapeContainer.addEventListener("click", function (e) {
      popup.innerHTML = marked.parse(etape.attributes.Descriptif);
      popup.classList.toggle("visible");
      overlay.classList.toggle("visible");
    });

    figure = document.createElement("figure");
    img = document.createElement("img");
    figure.appendChild(img);
    img.src = url + etape.attributes.Photos.data.attributes.url;
    etapeContainer.appendChild(figure);

    let divH2_P = document.createElement("div");

    titre = document.createElement("h2");
    titre.innerHTML = etape.attributes.Nom;
    etapeContainer.appendChild(divH2_P);
    divH2_P.appendChild(titre);

    distance = document.createElement("p");
    distance.innerHTML =
      "Distance d'étape " + etape.attributes.Distance + " km";
    etapeContainer.appendChild(divH2_P);
    divH2_P.appendChild(distance);

    gpx = url + etape.attributes.gpx.data.attributes.url;
    new L.GPX(gpx, {
      polyline_options: {
        color: "#e56cb9",
        opacity: 0.75,
        weight: 7,
        lineCap: "round",
      },
      marker_options: {
        startIconUrl: null,
        endIconUrl: null,
        shadowUrl: null,
      },
    })
      .on("mouseover mousemove", function (e) {
        this.setStyle({
          color: "#e237a3",
        });
      })
      .on("mouseout", function (e) {
        this.setStyle({
          color: "#e56cb9",
        });
      })
      .addTo(map);
  }
}

function get_articles() {
  console.log(url + url_article + url_img);
  fetch(url + url_article + url_img)
    .then((response) => response.json())
    .then((response) => creer_itineraires(response))
    .catch((error) => alert("Erreur : " + error));
}

get_articles();
