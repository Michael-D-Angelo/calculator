let firstOperand = null;
let operator = null;
let secondOperand = null;

const previousNumber = document.querySelectorAll(`[data-number]`);
previousNumber.forEach((numbersButton) => {
  numbersButton.addEventListener("click", () => {
    console.log(Number(event.target.dataset.number));
  });
});

const addOperator = document.querySelector(`[data-operation='+']`);
const subtractOperator = document.querySelector(`[data-operation='-']`);
const divideOperator = document.querySelector(`[data-operation='/']`);
const multiplyOperator = document.querySelector(`[data-operation='*']`);

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
