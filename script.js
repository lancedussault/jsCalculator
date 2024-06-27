const display = document.getElementById("display");
let trailingResult = 0;
const operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = '';

const updateDisplay = input => {
  if (display.innerText === "0" && operationOptions.indexOf(input) === -1) {
    if (input === "decimal") {
      display.innerText = "0.";
    } else if (input === "negative-value") {
      if (display.innerText.indexOf("-") === -1) {
        display.innerText = "-" + display.innerText;
      } else {
        display.innerText = display.innerText.slice(1);
      }
    } else {
      display.innerText = input;
    }
  } else if (operationOptions.indexOf(input) >= 0) {
    if (trailingResult.toString() === display.innerText) {
      workingOperation = input;
    } else if (workingOperation === '') {
      workingOperation = input;
      trailingResult = display.innerText;
      display.innerText = 0;
    } else {
      trailingResult = calculate(trailingResult, display.innerText, workingOperation);
      display.innerText = 0;
      workingOperation = input;
    }
  } else if (input === "equals") {
    display.innerText = calculate(trailingResult, display.innerText, workingOperation);
    trailingResult = 0;
    workingOperation = '';
  } else if (input === "decimal") {
    if (display.innerText.indexOf(".") === -1) {
      display.innerText += ".";
    }
  } else if (input === "negative-value") {
    if (display.innerText.indexOf("-") === -1) {
      display.innerText = "-" + display.innerText;
    } else {
      display.innerText = display.innerText.slice(1);
    }
  } else {
    if (display.innerText === "0") {
      display.innerText = input;
    } else {
      display.innerText += input;
    }
  }
}

const calculate = (firstNum, secondNum, operation) => {
  let result;
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  switch (operation) {
    case 'add':
      result = firstNum + secondNum;
      break;
    case 'subtract':
      result = firstNum - secondNum;
      break;
    case 'multiply':
      result = firstNum * secondNum;
      break;
    case 'divide':
      result = firstNum / secondNum;
      break;
  }
  return result.toString();
}

const clearDisplay = () => {
  display.innerText = "0";
  trailingResult = 0;
  workingOperation = '';
}