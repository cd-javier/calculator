// --------------------------
// Math Functions
// --------------------------

// Basic Operations
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

// Operator
function operate(operator, previousNumber, currentNumber) {
  let result;

  switch (operator) {
    case "add":
      result = add(previousNumber, currentNumber);
      break;
    case "subtract":
      result = subtract(previousNumber, currentNumber);
      break;
    case "multiply":
      result = multiply(previousNumber, currentNumber);
      break;
    case "divide":
      result = divide(previousNumber, currentNumber);
      break;
  }

  return truncate(result);
}

// Function to truncate the result to fit on display
function truncate(number) {
  const intLength = Math.floor(number).toString().length;
  const numOfTrunc = 10 ** (11 - intLength);
  const truncated = Math.floor(number * numOfTrunc) / numOfTrunc;
  return truncated;
}

// --------------------------
// Basic variables
// --------------------------
let previousNumber;
let operator;
let currentNumber;

function updateDisplay(value) {
  const display = document.querySelector("#display");
  display.textContent = value;
}
