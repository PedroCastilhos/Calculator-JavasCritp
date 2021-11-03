var input = document.getElementsByTagName('input')[0];

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const point = document.querySelector('.point');
const plus = document.querySelector('.plus');
const less = document.querySelector('.less');
const times = document.querySelector('.times');
const divisor = document.querySelector('.divisor');
const equal = document.querySelector('.equal');

let valor = Number(input.value);

zero.addEventListener('click', function () {
  valor = 0;
  input.value += valor;
  console.log(valor);
});

one.addEventListener('click', function () {
  valor = 1;
  input.value += valor;
  console.log(valor);
});

two.addEventListener('click', function () {
  valor = 2;
  input.value += valor;
  console.log(valor);
});

three.addEventListener('click', function () {
  valor = 3;
  input.value += valor;
  console.log(valor);
});

four.addEventListener('click', function () {
  valor = 4;
  input.value += valor;
  console.log(valor);
});

five.addEventListener('click', function () {
  valor = 5;
  input.value += valor;
  console.log(valor);
});

six.addEventListener('click', function () {
  valor = 6;
  input.value += valor;
  console.log(valor);
});

seven.addEventListener('click', function () {
  valor = 7;
  input.value += valor;
  console.log(valor);
});

eight.addEventListener('click', function () {
  valor = 8;
  input.value += valor;
  console.log(valor);
});

nine.addEventListener('click', function () {
  valor = 9;
  input.value += valor;
  console.log(valor);
});

plus.addEventListener('click', function () {
  valor = '+';
  input.value += valor;
  console.log(valor);
});

less.addEventListener('click', function () {
  valor = '-';
  input.value += valor;
  console.log(valor);
});

divisor.addEventListener('click', function () {
  valor = '/';
  input.value += valor;
  console.log(valor);
});

times.addEventListener('click', function () {
  valor = 'x';
  input.value += valor;
  console.log(valor);
});
