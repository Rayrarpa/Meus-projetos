var alunos = [];
var notas = [];

window.alert('Para ver a nota do aluno terá que ser adicionado sempre que atualizar o site');

window.alert('Pois as informações passadas estão no Front-end e não no Back')

function btn() {
  var nomeDoAluno = document.getElementById('name').value;
  var notaPrimeiroBimestre = parseFloat(document.getElementById('ndpb').value);
  var notaSegundoBimestre = parseFloat(document.getElementById('ndsb').value);
  var notaTerceiroBimestre = parseFloat(document.getElementById('ndtb').value);
  var notaQuartoBimestre = parseFloat(document.getElementById('ndqb').value);
  
  var teste = [notaPrimeiroBimestre, notaSegundoBimestre, notaTerceiroBimestre, notaQuartoBimestre];
  
  var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
  
  var mostrarNota = document.getElementById('res1');
  var mostrarNome = document.getElementById('res2');
  
  mostrarNota.innerHTML = `A nota final foi ${notaFinal.toFixed(1)}`
  
  if (notaFinal >= 6 ) {
    mostrarNome.innerHTML = `O aluno ${nomeDoAluno} foi aprovado`
  } else {
    mostrarNome.innerHTML = `O aluno ${nomeDoAluno} foi reprovado`
  }
  
  alunos.push(nomeDoAluno);
  notas.push(parseFloat(notaFinal.toFixed(1)));
  
  document.getElementById('name').value = "";
  document.getElementById('ndpb').value = "";
  document.getElementById('ndsb').value = "";
  document.getElementById('ndtb').value = "";
  document.getElementById('ndqb').value = "";
}

function ver() {
  var exibir = document.getElementById('mostrar').value;
  var posi = alunos.indexOf(exibir);
  
  if (posi < 0) {
    window.alert('Aluno não encontrado, verifique se digitou corretamente')
  } else {
    var alunoSelecionado = alunos[posi];
    var notaDoAluno = notas[posi];
    var mostrar = document.getElementById('aluno');


    if (notaDoAluno >= 6) {
      mostrar.innerHTML = `O aluno(a) ${alunoSelecionado} tem a nota ${notaDoAluno} na media,<br> por isso está aprovado(a)`
    } else {
      mostrar.innerHTML = `O aluno(a) ${alunoSelecionado} tem a nota ${notaDoAluno} na media,<br> por isso está reprovado(a)`
    }
  }
}
 
 