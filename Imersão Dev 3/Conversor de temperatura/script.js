function Cel() {
  var modificar = document.getElementById('mod');
  
  mod.innerHTML = `<label>Insira o valor</label><br>
  <input type="number" id="temperatura" size="2" min="0" max="1000" /><br>
  <button type="submit" onclick="Converter1()">Converter para Fahrenheit</button>
  <button type"submit" onclick="Converter2()">Converter para Kelvin</button><br><button onclick="voltar()">voltar</button>`
}

function Fah() {
  var modificar = document.getElementById('mod');
  
  mod.innerHTML = `<label for="moeda">Insira o valor</label><br>
  <input type="number" id="temperatura" size="2" min="0" max="1000" /><br>
  <button type="submit" onclick="Converter3()">Converter para Celsius</button>
  <button type"submit" onclick="Converter4()">Converter para Kelvin</button><br><button onclick="voltar()">voltar</button>`
}

function Kel() {
  var modificar = document.getElementById('mod');
  
  mod.innerHTML = `<label for="moeda">Insira o valor</label><br>
  <input type="number" id="temperatura" size="2" min="0" max="1000" /><br>
  <button type="submit" onclick="Converter5()">Converter para Celsius</button>
  <button type"submit" onclick="Converter6()">Converter para Fahrenheit</button><br><button onclick="voltar()">voltar</button>`
}


function Converter1() {
  var resul = document.getElementById('tempConvertido');
  var temperatura = document.getElementById('temperatura');
  var temperaturaReal = parseFloat(temperatura.value);

  var temperaturaConvertida = (temperaturaReal * 9/5) + 32;

  resul.innerHTML = `${temperaturaReal}°C em Fahrenheit é ${temperaturaConvertida.toFixed(1)}°F`
}



function Converter2() {
  var resul = document.getElementById('tempConvertido');
  var temperatura = document.getElementById('temperatura');
  var temperaturaReal = parseFloat(temperatura.value);

  var temperaturaConvertida = temperaturaReal + 273.15;

  resul.innerHTML = `${temperaturaReal}°C em Kelvin é ${temperaturaConvertida.toFixed(1)}K`
}



function Converter3() {
  var resul = document.getElementById('tempConvertido');
  var temperatura = document.getElementById('temperatura');
  var temperaturaReal = parseFloat(temperatura.value);

  var temperaturaConvertida = (temperaturaReal - 32) * 5/9;

  resul.innerHTML = `${temperaturaReal}°F em Celsius é ${temperaturaConvertida.toFixed(1)}°C`
}



function Converter4() {
  var resul = document.getElementById('tempConvertido');
  var temperatura = document.getElementById('temperatura');
  var temperaturaReal = parseFloat(temperatura.value);

  var temperaturaConvertida = (temperaturaReal - 32) * 5/9 + 273.15;

  resul.innerHTML = `${temperaturaReal}°F em Kelvin é ${temperaturaConvertida.toFixed(1)}K`
}



function Converter5() {
  var resul = document.getElementById('tempConvertido');
  var temperatura = document.getElementById('temperatura');
  var temperaturaReal = parseFloat(temperatura.value);

  var temperaturaConvertida = temperaturaReal - 273.15;

  resul.innerHTML = `${temperaturaReal}K em Celsius é ${temperaturaConvertida.toFixed(1)}°C`
}



function Converter6() {
  var resul = document.getElementById('tempConvertido');
  var temperatura = document.getElementById('temperatura');
  var temperaturaReal = parseFloat(temperatura.value);

  var temperaturaConvertida = (temperaturaReal - 273.15) * 9/5 + 32;

  resul.innerHTML = `${temperaturaReal}K em Fahrenheit é ${temperaturaConvertida.toFixed(1)}°F`
}

function voltar() {
  var modificar = document.getElementById('mod');
  var muda = document.getElementById('tempConvertido');
  
  mod.innerHTML = `<p class="page-subtitle">Qual tipo de temperatura você quer converter?</p>
    <button onclick="Cel()">Celsius</button>
    <button onclick="Fah()">Fahrenheit</button>
    <button onclick="Kel()">Kelvin</button>`
  
  muda.innerHTML = '';
}