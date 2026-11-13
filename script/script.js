let firstOperand = null;
let operator = null;
let secondOperand = null;

const numbersBtn = document.querySelectorAll(`[data-number]`);

const addOperator = document.querySelector(`[data-operation='+']`);
const subtractOperator = document.querySelector(`[data-operation='-']`);
const divideOperator = document.querySelector(`[data-operation='/']`);
const multiplyOperator = document.querySelector(`[data-operation='*']`);
const allClearBtn = document.querySelector(`[data-all-clear]`);
const deleteBtn = document.querySelector(`[data-delete]`);
const equalsBtn = document.querySelector(`[data-equals]`);
const previousOperandDisplay = document.querySelector(
  `[data-previous-operand]`,
);
const currentOperandDisplay = document.querySelector(`[data-current-operand]`);

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

function operate(firstNum, operation, secondNum) {
  if (firstNum === null || operation === null || secondNum === null) {
    return null;
  } else if (operation === ":" && secondNum === 0) {
    return "nice try";
  } else if (operation === "+") {
    return add(firstNum, secondNum);
  } else if (operation === "-") {
    return subtract(firstNum, secondNum);
  } else if (operation === "*") {
    return multiply(firstNum, secondNum);
  } else if (operation === "/") {
    return divide(firstNum, secondNum);
  }
  return null;
}

numbersBtn.forEach((numbers) => {
  numbers.addEventListener("click", (e) => {
    // Display current number
    const firstNum =
      (currentOperandDisplay.textContent += `${e.target.dataset.number}`);
    // Whilst assign to firstOperand state
    firstOperand = Number(firstNum);
  });
});
