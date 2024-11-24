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
  // The calculator display can only hold a certain number of characters
  // For that reason we need to truncate floaters
  const intLength = Math.floor(number).toString().length; // Calculate the length of the rounded integer
  const numOfTrunc = 10 ** (maxCharacters - 1 - intLength); // Decides how many floaters it needs to truncate
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
    getDisplayContent() === getCurrentNumber() &&
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
  if (
    display.textContent !== "0" &&
    canWrite() &&
    getDisplayContent() === getCurrentNumber()
  ) {
    currentNumber.push(0);
    updateDisplay(display.textContent + 0);
  } else if (
    display.textContent !== 0 &&
    canWrite() &&
    getDisplayContent() !== getCurrentNumber()
  ) {
    updateDisplay(getCurrentNumber());
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
    // Checks if the operator has been declared and the value of current number has changed
    if ((operator && currentNumber.length > 1) || currentNumber[0] !== 0) {
      calculate();
    }
    operator = button.value;
    previousNumber = getDisplayContent();
    currentNumber = [0];
  });
}

function calculate() {
  if (getCurrentNumber() === 0 && operator === "divide") {
    // Error message in case the user tries to divide by 0
    clearEverything();
    updateDisplay("😵‍💫");
  } else if (previousNumber !== undefined && operator) {
    // If all parameters have been set, the operations is performed
    const result = operate(operator, previousNumber, getCurrentNumber());
    updateDisplay(result);
    previousNumber = result; // The result is saved for a future operation
    currentNumber = [0]; // The current value and operators are reset
    operator = undefined;
  }
}

function calculatePercentage() {
  const result = operate("divide", getDisplayContent(), 100);
  currentNumber = [result];
  updateDisplay(getCurrentNumber());
}

function makeNegative() {
  if (getDisplayContent() === getCurrentNumber()) {
    currentNumber = [-getCurrentNumber()];
    updateDisplay(getCurrentNumber());
  } else {
    updateDisplay(-getDisplayContent());
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
