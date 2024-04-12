console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  number1 = parseInt(a);
  number2 = parseInt(b);
  return number1 + number2;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const firstNumber = event.target.elements.numberA.value;
  const secondNumber = event.target.elements.numberB.value;

  const addition = event.target.elements.addition;
  const subtraction = event.target.elements.subtraction;
  const multiplication = event.target.elements.multiplication;
  const division = event.target.elements.division;

  // if (event.target.elements.getElementbyID("addition"))
  if (addition.checked == true) {
    result = add(firstNumber, secondNumber);
  } else if (subtraction.checked == true) {
    result = subtract(firstNumber, secondNumber);
  } else if (multiplication.checked == true) {
    result = multiply(firstNumber, secondNumber);
  } else {
    result = divide(firstNumber, secondNumber);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
