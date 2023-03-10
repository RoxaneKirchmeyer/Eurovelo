const url = "http://90.110.218.245:5001";
const url_article = "/api/trace-globals"
const url_img = "?populate=*";

let mapAccueil = document.querySelector("#map");

var map = L.map("map").setView([50.72374, 2.53729], 8);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


function creer_map(data) {

data = data.data;

 gpx = url + data[0].attributes.gpx.data.attributes.url;
    new L.GPX(gpx, {
      polyline_options: {
        color: "black",
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
          color: "#FF4500",
        });
      })
      .on("mouseout", function (e) {
        this.setStyle({
          color: "#e56cb9",
        });
      })
      .addTo(map);
    }

    function get_map() {
      console.log(url + url_article + url_img);
      fetch(url + url_article + url_img)
        .then((response) => response.json())
        .then((response) => creer_map(response))
        .catch((error) => alert("Erreur : " + error));
    }

get_map()