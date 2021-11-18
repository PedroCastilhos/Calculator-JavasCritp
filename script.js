//Função para receber o valor dos input's, a partir do parametro e do atributo no HTML.
function insert(num) {
  let number = document.getElementById('screen').innerHTML;
  document.getElementById('screen').innerHTML = number + num;
}

//Função para limpar a tela
function clean() {
  // A palavra "Clear" é uma palavra reservada do JavaScript
  document.querySelector('#screen').innerHTML = '';
}

//Função para aapagar o último caractere
function back() {
  let result = document.getElementById('screen').innerHTML;
  //O método substring é utilizado para extrair caracteres de uma string
  document.getElementById('screen').innerHTML = result.substring(
    0,
    result.length - 1
  );
}

function calculate() {
  let result = document.getElementById('screen').innerHTML;

  if (result) {
    document.getElementById('screen').innerHTML = eval(result); // eval é uma função do JS que realiza conta automáticamente
  } else {
    alert('Insira algum dado antes de calcular');
  }
}
