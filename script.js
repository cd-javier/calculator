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
  const numOfTrunc = 10 ** (maxCharacters - 1 - intLength);
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

function canWrite() {
  if (
    display.textContent == getCurrentNumber() &&
    display.textContent.length >= maxCharacters
  ) {
    return false;
  } else {
    return true;
  }
}

// --------------------------
// Basic Variables
// --------------------------
const maxCharacters = 9;
let previousNumber;
let operator;
let currentNumber = [0];

function getCurrentNumber() {
  return Number(currentNumber.join(""));
}

function getDisplayContent() {
  return Number(display.textContent);
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
    if (canWrite()) {
      currentNumber.push(button.value);
      updateDisplay(getCurrentNumber());
    }
  });
}

function addZero() {
  if (display.textContent !== "0") {
    if (canWrite()) {
      currentNumber.push(0);
      display.textContent = display.textContent + 0;
    }
  }
}

function addDecimal() {
  if (!currentNumber.includes(".") && canWrite()) {
    currentNumber.push(".");
    updateDisplay(getCurrentNumber() + ".");
  }
}

function clickOperator(button) {
  button.addEventListener("click", () => {
    if (!operator) {
      previousNumber = getDisplayContent();
      currentNumber = [0];
      operator = button.value;
    } else if (
      operator &&
      currentNumber.length === 1 &&
      currentNumber[0] === 0
    ) {
      operator = button.value;
    } else {
      calculate();
      operator = button.value;
    }
  });
}

function calculate() {
  if (previousNumber && operator) {
    const result = operate(operator, previousNumber, getCurrentNumber());
    updateDisplay(result);
    previousNumber = result;
    currentNumber = [0];
    operator = undefined;
  }
}

function calculatePercentage() {
  const result = operate("divide", getDisplayContent(), 100);
  display.textContent = result;
}

function makeNegative() {
  if (getDisplayContent() === getCurrentNumber()) {
    currentNumber = [-getCurrentNumber()];
    updateDisplay(getCurrentNumber());
  } else {
    display.textContent = -getDisplayContent();
    previousNumber = -getDisplayContent();
  }
}

function clearEverything() {
  previousNumber = undefined;
  operator = undefined;
  currentNumber = [0];
  updateDisplay(0);
}

// --------------------------
// Event Listeners
// --------------------------
numberButtons.forEach((button) => clickNumber(button));
zeroButton.addEventListener("click", addZero);
decimalButton.addEventListener("click", addDecimal);
operatorButtons.forEach((button) => clickOperator(button));
equalButton.addEventListener("click", calculate);
percentageButton.addEventListener("click", calculatePercentage);
negativeButton.addEventListener("click", makeNegative);
acButton.addEventListener("click", clearEverything);
