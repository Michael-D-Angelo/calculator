function add() {
  let firstOperand = null;
  let operator = null;
  let secondOperand = null;
}

function subtract() {
  let firstOperand = null;
  let operator = null;
  let secondOperand = null;
}

function multiply() {
  let firstOperand = null;
  let operator = null;
  let secondOperand = null;
}

function divide() {
  let firstOperand = null;
  let operator = null;
  let secondOperand = null;
}

function operate(firstNum, operator, secondNum) {
  if (firstNum && operator === "+" && secondNum) {
    return firstNum + secondNum;
  }
  return operate;
}
