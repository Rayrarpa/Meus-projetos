var carta1 = {
  nome: "Charmander",
  imagem:
    "https://pbs.twimg.com/profile_images/1377854248621199360/F7S8p4xK_400x400.jpg",
  atributos: {
    ataque: 13,
    defesa: 9,
    poder: 14
  }
};

var carta2 = {
  nome: "Squirtle",
  imagem: "https://cdn2.bulbagarden.net/upload/4/4b/Ash_Squirtle.png",
  atributos: {
    ataque: 11,
    defesa: 10,
    poder: 16
  }
};

var carta3 = {
  nome: "Bubalssaur",
  imagem:
    "https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg",
  atributos: {
    ataque: 10,
    defesa: 11,
    poder: 14
  }
};

var superTrunfo = {
  nome: "Mew",
  imagem:
    "https://www.gamespot.com/a/uploads/screen_medium/1578/15787979/3824641-gs-feature-mew.png",
  atributos: {
    ataque: 20,
    defesa: 20,
    poder: 20
  }
};

var cartas = [carta1, carta2, carta3, superTrunfo];
var cartaDaMaquina;
var cartaDoJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4);

  cartaDaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 4);

  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 4);
  }

  cartaDoJogador = cartas[numeroCartaJogador];
  console.log(cartaDoJogador);
  console.log(cartaDaMaquina);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked == true) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaDoJogador.atributos[atributoSelecionado] >
    cartaDaMaquina.atributos[atributoSelecionado]
  ) {
    divResultado.innerHTML = `<p class='resultado-final'>Você venceu</p>`;
  } else if (
    cartaDoJogador.atributos[atributoSelecionado] <
    cartaDaMaquina.atributos[atributoSelecionado]
  ) {
    divResultado.innerHTML = `<p class='resultado-final'>Você perdeu</p>`;
  } else {
    divResultado.innerHTML = `<p class='resultado-final'>Empatou</p>`;
  }

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");

  divCartaJogador.style.backgroundImage = `url(${cartaDoJogador.imagem})`;
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png' style='width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesText = "";

  for (var atributo in cartaDoJogador.atributos) {
    opcoesText +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaDoJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class='carta-subtitle'>${cartaDoJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = `url(${cartaDaMaquina.imagem})`;
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png' style='width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesText = "";

  for (var atributo in cartaDaMaquina.atributos) {
    opcoesText +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaDaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class='carta-subtitle'>${cartaDaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
}
