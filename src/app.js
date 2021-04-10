const { calc } = require('./math');

const form = document.querySelector('form');
const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const result = document.querySelector('#result');

function onSubmit(event) {
  event.preventDefault();

  const a = Number(input1.value);
  const b = Number(input2.value);
  const operator = event.submitter.value;

  const mathResult = calc(operator, a, b);

  result.textContent = `${a} ${operator} ${b} = ${mathResult}`;
}

form.addEventListener('submit', onSubmit);
