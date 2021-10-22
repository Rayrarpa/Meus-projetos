var listaFilmes = [
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/93/94/10/20287529.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/85/20122112.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/14/10/10/19/21/152595.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/62/20122008.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg"
];

var i = 0;

while (i < listaFilmes.length) {
  document.write('<img id="imga" src=' + listaFilmes[i] + ">");
  i++;
}

function adi() {
  var link = document.getElementById("adicionar").value;

  listaFilmes.push(link);

  var body = document.body;

  body.innerHTML += "<img src=" + link + ">";
}
