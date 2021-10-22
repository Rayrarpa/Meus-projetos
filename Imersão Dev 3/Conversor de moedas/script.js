//<BOTÕES>
function real() {
  var modificar = document.getElementById('mod');
  
  mod.innerHTML = `<label>Insira o valor</label><br>
  <input type="number" id="moeda" size="2" min="0" max="1000" /><br>
  <button type="submit" onclick="converterDolar1()">Converter para Dolar</button>
  <button type"submit" onclick="converterEuro1()">Converter para Euro</button><br><button onclick="voltar()">voltar</button>`
}

function dolar() {
  var modificar = document.getElementById('mod');
  
  mod.innerHTML = `<label for="moeda">Insira o valor</label><br>
  <input type="number" id="moeda" size="2" min="0" max="1000" /><br>
  <button type="submit" onclick="converterReal1()">Converter para Real</button>
  <button type"submit" onclick="converterEuro2()">Converter para Euro</button><br><button onclick="voltar()">voltar</button>`
}

function euro() {
  var modificar = document.getElementById('mod');
  
  mod.innerHTML = `<label for="moeda">Insira o valor</label><br>
  <input type="number" id="moeda" size="2" min="0" max="1000" /><br>
  <button type="submit" onclick="converterReal2()">Converter para Real</button>
  <button type"submit" onclick="converterDolar2()">Converter para Dolar</button><br><button onclick="voltar()">voltar</button>`
}
// </BOTÕES>

// <FUNÇÕES DE CONVERSÃO>
function converterReal1() {
  var resul = document.getElementById('moedaConvertida');
  var valorDoElemento = document.getElementById('moeda');
  var moeda = parseFloat(valorDoElemento.value);

  var moedaConvertida = moeda * 5.55;

  resul.innerHTML = `${moeda.toFixed(2)}$ em Real é ${moedaConvertida.toFixed(2)}R$`
}



function converterReal2() {
  var resul = document.getElementById('moedaConvertida');
  var valorDoElemento = document.getElementById('moeda');
  var moeda = parseFloat(valorDoElemento.value);

  var moedaConvertida = moeda * 6.40;

  resul.innerHTML = `${moeda.toFixed(2)}€ em Euro é ${moedaConvertida.toFixed(2)}R$`
}



function converterDolar1() {
  var resul = document.getElementById('moedaConvertida');
  var valorDoElemento = document.getElementById('moeda');
  var moeda = parseFloat(valorDoElemento.value);

  var moedaConvertida = moeda / 5.55;

  resul.innerHTML = `${moeda.toFixed(2)}R$ em Dolar é ${moedaConvertida.toFixed(2)}$`
}



function converterDolar2() {
  var resul = document.getElementById('moedaConvertida');
  var valorDoElemento = document.getElementById('moeda');
  var moeda = parseFloat(valorDoElemento.value);

  var moedaConvertida = moeda * 1.16;

  resul.innerHTML = `${moeda.toFixed(2)}€ em Dolar é ${moedaConvertida.toFixed(2)}$`
}



function converterEuro1() {
  var resul = document.getElementById('moedaConvertida');
  var valorDoElemento = document.getElementById('moeda');
  var moeda = parseFloat(valorDoElemento.value);

  var moedaConvertida = moeda / 6.40;

  resul.innerHTML = `${moeda.toFixed(2)}R$ em Real é ${moedaConvertida.toFixed(2)}€`
}



function converterEuro2() {
  var resul = document.getElementById('moedaConvertida');
  var valorDoElemento = document.getElementById('moeda');
  var moeda = parseFloat(valorDoElemento.value);

  var moedaConvertida = moeda / 1.16;

  resul.innerHTML = `${moeda.toFixed(2)}$ em Dolar é ${moedaConvertida.toFixed(2)}€`
}

// </FUNÇÕES>

function voltar() {
  var modificar = document.getElementById('mod');
  var muda = document.getElementById('moedaConvertida');
  
  muda.innerHTML = "";
  
  mod.innerHTML = `<p class="page-subtitle">Qual tipo de temperatura você quer converter?</p>
    <button onclick="real()">Real</button>
    <button onclick="dolar()">Dolar</button>
    <button onclick="euro()">Euro</button>`
}