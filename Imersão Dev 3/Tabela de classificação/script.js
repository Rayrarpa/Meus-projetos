var jogador1 = {
  avatar: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/70/70fb22d59029544f78d81a520f6bbbefad43fe37_full.jpg",
  nome: "Astralis",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var jogador2 = {
  avatar: "https://theclutch.com.br/wp-content/uploads/2020/01/EB2D980C-479F-4D87-9DB2-BC39D9B1E5EA-6301-0000068150F988DD.jpg",
  nome: "Fnatic",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates - (jogador.derrotas * 2);
  return pontos;
}

jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);

var jogadores = [jogador1, jogador2];

function exibirJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td><img src="+ jogadores[i].avatar + "></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias +"</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas +"</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td><button onClick=\"adicionarVitoria("+ i +")\">Vitória</button></td>";
    elemento += "<td><button onClick=\"adicionarEmpate("+ i +")\">Empate</button></td>";
    elemento += "<td><button onClick=\"adicionarDerrota("+ i +")\">Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");

  tabelaJogadores.innerHTML = elemento;
}


function adicionarVitoria(i) {
  jogadores[i].vitorias++;
  for (var j = 0; j < jogadores.length; j++) {
    if (jogadores[j] != jogadores[i]) {
      jogadores[j].derrotas++;
      jogadores[j].pontos = calculaPontos(jogadores[j]);
    }
  }
  jogadores[i].pontos = calculaPontos(jogadores[i]);
  exibirJogadores(jogadores)
}

function adicionarEmpate(i) {
  for (var o = 0; o < jogadores.length; o++) {
    var jogador = jogadores[o];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores)
  }
}

function adicionarDerrota(i) {
   jogadores[i].derrotas++;
  for (var j = 0; j < jogadores.length; j++) {
    if (jogadores[j] != jogadores[i]) {
      jogadores[j].vitorias++;
      jogadores[j].pontos = calculaPontos(jogadores[j])
    }
    jogadores[i].pontos = calculaPontos(jogadores[i]);
  }
  exibirJogadores(jogadores)
}

function adicionarNovoJogador() {
  var novoNome = document.getElementById('nomeDoJogadorNovo').value;
  var novaImagem = document.getElementById('imagemDoJogadorNovo').value;
  
  if(novoNome == '' || novaImagem == '') {
    window.alert('Preencha tudo certo')
  } else{
    var jojo = {
      avatar: novaImagem,
      nome: novoNome,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    }

    jogadores.push(jojo);

    console.log(jogadores)

    exibirJogadores(jogadores)
  }
  
}

function zerar() {
  for(var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibirJogadores(jogadores);
}

exibirJogadores(jogadores)