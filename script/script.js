let firstOperand = null;
let operator = null;
let secondOperand = null;

function add(a, b) {
  return a + b;
}

function subtract() {}

function multiply() {}

function divide() {}

function operate(firstNum, operator, secondNum) {
  if (firstNum === null || operator === null || secondNum === null) {
    return null;
  } else if (operator === "+") {
    return add(firstNum, secondNum);
  }
  return null;
}
