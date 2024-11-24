// --------------------------
// Math Functions
// --------------------------

// Basic Operations
function add(a, b) {
  return Number(a) + Number(b);
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

function truncate(number) {
  const intLength = Math.floor(number).toString().length;
  const numOfTrunc = 10 ** (11 - intLength);
  const truncated = Math.floor(number * numOfTrunc) / numOfTrunc;
  return truncated;
}

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

function updateDisplay(value) {
  const display = document.querySelector("#display");
  display.textContent = value;
}

// --------------------------
// Basic Variables
// --------------------------
let previousNumber;
let operator;
let currentNumber = [];

function getCurrentNumber() {
  return Number(currentNumber.join(''))
}

// --------------------------
// Query Selectors
// --------------------------
const numberButtons = document.querySelectorAll(".number");
const decimalButton = document.querySelector(".decimal");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const percentageButton = document.querySelector(".percentage");
const negativeButton = document.querySelector(".negative");
const acButton = document.querySelector(".ac");

// --------------------------
// Event Listener Functions
// --------------------------
function addNumber(button) {
  button.addEventListener("click", () => {
    if (display.textContent.length < 12) {
      currentNumber.push(button.value);
      updateDisplay(getCurrentNumber());
    }
  });
}

// --------------------------
// Event Listeners
// --------------------------
numberButtons.forEach((button) => addNumber(button));
