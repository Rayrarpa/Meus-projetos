//Usa a biblioteca Math do javascript, pegando um numero aleatorio, multiplicando por 11 e transformando em inteiro
var numeroSecreto = parseInt(Math.random() * 11);

var tentativa = 4;

function bele () {
  var divi = document.getElementById('batata');
  
  divi.innerHTML = `<h1 class="page-title">
      Mentalista
    </h1>
    <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-mentalista.svg" class="page-logo" alt=""><br>
    <p class="page-subtitle">
      Digite um número de 0 a 10
    </p>
    <input type="number" id="valor" /><br>
    <button type="submit" onclick="Chutar()" id="btn">Chutar</button>
    <h2 class="resultado" id="resultado"></h2>
    <h2 class="resultado" id="indicador"></h2>
    <h2 class="resultado" id="chances"></h2>`
}
function Chutar() {
  var chances = document.getElementById("chances");
  //Pega o elemento com o id "resultado" no HTML
  var resul = document.getElementById("resultado");

  //Pega o valor do elemento e transforma em inteiro
  var chute = parseInt(document.getElementById("valor").value);

  var indica = document.getElementById("indicador");

  //Verifica se o valor do chute é igual ao numero aleatorio
  if (chute == numeroSecreto) {
    //Altera o elemento do HTML
    resul.innerHTML = "Você acertou ebaaaaa";
    
    chances.innerHTML = '';

    indica.innerHTML = "";
    //Se a primeira condição n for correta passa pra essa, que verifica se o numero do chute é maior que 10, caso for maior que 10 retorna uma mensagem
  } else if (chute > 10) {
    resul.innerHTML = "Você deve digitar um numero entre 0 a 10";
    //Caso todos os de cima não forem corretos executa esse
  } else {
    resul.innerHTML = "Errou";

    //Subtrai o numero 1 da variavel tentativa
    tentativa--;

    chances.innerHTML = `Você tem ${tentativa} chances`;
  }

  //Verifica se a variavel tentativa chegou a 0
  if (tentativa == 0) {
    var input = document.getElementById("valor");
    var button = document.getElementById("btn");
    window.alert("Acabou suas chances");
    //Elimina o elemento do HTML
    button.parentNode.removeChild(button);
    input.parentNode.removeChild(input);
    indica.parentNode.removeChild(indica);
  }

  //Verifica se o chute é maior que o numero aleatorio, caso for retorna falando se o numero é maior ou menor
  if (chute > numeroSecreto) {
    indica.innerHTML = "Quase, chute um numero MENOR";
  } else if (chute < numeroSecreto) {
    indica.innerHTML = "Quase, chute um numero MAIOR";
  }
}
