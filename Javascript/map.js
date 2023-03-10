const url = "http://90.110.218.245:5001";
const url_article = "/api/itineraires";
const url_img = "?populate=*";

var map = L.map("map").setView([50.72374, 2.53729], 8);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function creer_map(data) {

data = data.data;

let gpx = url + etape.attributes.gpx.data.attributes.url;
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
          color: "red",
        });
      })
      .on("mouseout", function (e) {
        this.setStyle({
          color: "black",
        });
      })
      .addTo(map);
    }


creer_map()