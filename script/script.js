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

function operate(firstNum, operator, secondNum) {
  if (firstNum === null || operator === null || secondNum === null) {
    return null;
  } else if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator === "x") {
    return multiply(firstNum, secondNum);
  } else if (operator === ":") {
    return divide(firstNum, secondNum);
  }
  return null;
}
