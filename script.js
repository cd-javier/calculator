function add(a, b) {
  return a + b;
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

let previousNumber;
let operator;
let currentNumber;

function operate(operator, previousNumber, currentNumber) {
  let result;

  switch (operator) {
    case add:
      result = add(previousNumber, currentNumber);
      break;
    case subtract:
      result = subtract(previousNumber, currentNumber);
      break;
    case multiply:
      result = multiply(previousNumber, currentNumber);
      break;
    case divide:
      result = divide(previousNumber, currentNumber);
      break;
  }

  return result;
}