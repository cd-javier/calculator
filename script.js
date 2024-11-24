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
  const numOfTrunc = 10 ** (maxCharacters - intLength);
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
const maxCharacters = 12;
let previousNumber;
let operator;
let currentNumber = [0];

function getCurrentNumber() {
  return Number(currentNumber.join(""));
}

// --------------------------
// Query Selectors
// --------------------------
const numberButtons = document.querySelectorAll(".number");
const zeroButton = document.querySelector(".zero");
const decimalButton = document.querySelector(".decimal");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const percentageButton = document.querySelector(".percentage");
const negativeButton = document.querySelector(".negative");
const acButton = document.querySelector(".ac");

// --------------------------
// Event Listener Functions
// --------------------------
function clickNumber(button) {
  button.addEventListener("click", () => {
    if (display.textContent.length < maxCharacters) {
      currentNumber.push(button.value);
      updateDisplay(getCurrentNumber());
    }
  });
}

function addZero() {
  if (display.textContent !== "0") {
    if (display.textContent.length < maxCharacters) {
      currentNumber.push(0);
      display.textContent = display.textContent + 0;
    }
  }
}

function addDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber.push(".");
    updateDisplay(getCurrentNumber() + ".");
  }
}

function clickOperator(button) {
  button.addEventListener("click", () => {
    if (!operator && !previousNumber) {
      previousNumber = getCurrentNumber();
      currentNumber = [];
      operator = button.value;
    }
  })
}

// --------------------------
// Event Listeners
// --------------------------
numberButtons.forEach((button) => clickNumber(button));
zeroButton.addEventListener("click", addZero);
decimalButton.addEventListener("click", addDecimal);
operatorButtons.forEach((button) => clickOperator(button));
