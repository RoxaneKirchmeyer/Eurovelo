// let url_server = "http://90.110.218.245:5001";
// let end_point_etape = "/api/itineraires?populate=*";

// // Affichage de la carte 

// var map = L.map('map').setView([50.72374, 2.53729], 9);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// // Ajout d'un gpx à la carte 


// //fin affichage carte

// let contenu_etape_html = document.querySelector(".contenu_etape");
// contenu_etape_html.addEventListener("click", function (e) {
//     contenu_etape_html.classList.toggle("visible");
// })

// async function creer_etapes() {
//     let response = await fetch(url_server + end_point_etape);

//     if (response.ok) {
//         let json = await response.json();

//         let etapes_html = document.querySelector(".etapes");
//         for (const etape of json.data) {
//             // Création de la liste d'étapes
//             article = document.createElement("article");
//             // article.id = etape.id-1;
//             article.addEventListener("click", function (e) {
//                 let contenu_etape_txt = document.querySelector(".contenu_etape>div");
//                 contenu_etape_txt.innerHTML = marked.parse(etape.attributes.Descriptif);
//                 contenu_etape_html.classList.add("visible");
//             })



//             titre = document.createElement("h2");
//             titre.innerHtml = etape.attributes.Nom;
//             etapeContainer.appendChild(titre)

//             texte = document.createElement("p");
//             texte.innerHtml = etape.attributes.Descriptif;
//             etapeContainer.appendChild(texte)


//             img = document.createElement("img");
//             img.src = url_server + etape.attributes.Photos.data.attributes.formats.thumbnail.url;
//             etapeContainer.appendChild(img)


//             distance = document.createElement("p");
//             distance.innerHtml = "Distance d'étape " + etape.attributes.Distance + " km";
//             etapeContainer.appendChild(distance)

//             // Ajout des GPX sur la carte

//             let gpx = url_server + etape.attributes.gpx.data.attributes.url;

//             new L.GPX(gpx, {
//                 polyline_options: {
//                     color: 'black',
//                     opacity: 0.75,
//                     weight: 7,
//                     lineCap: 'round'
//                 },

//                 marker_options: {
//                     startIconUrl: null,
//                     endIconUrl: null,
//                     shadowUrl: null
//                 }
//             }).on("click", function (e) {
//                 let contenu_etape_txt = document.querySelector(".contenu_etape>div");
//                 contenu_etape_txt.innerHTML = marked.parse(etape.attributes.Descriptif);
//                 contenu_etape_html.classList.add("visible");
//             }).on("mouseover", function (e) {
//                 let gpx = e.target
//                 gpx.options.polyline_options.color = "hotpink";
//                 gpx.reload();
//             }).on("mouseout", function (e) {
//                 let gpx = e.target
//                 gpx.options.polyline_options.fill = "black";
//                 gpx.reload();
//             }).addTo(map);
//         }

//     } else {
//         alert("HTTP-Error: " + response.status);
//     }
// }

// creer_etapes();