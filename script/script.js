let firstOperand = null;
let operator = null;
let secondOperand = null;

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
