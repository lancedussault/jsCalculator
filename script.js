const display = document.getElementById("display");
let trailingResult = 0;
const operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = '';
let lastInputWasOperator = false;

const updateDisplay = input => {
 if (display.innerText === "0" && operationOptions.indexOf(input) === -1) {

  if (input === "decimal") {
   display.innerText = "0."
  } else {
   display.innerText = input;
  }
  lastInputWasOperator = false;

 } else if (operationOptions.indexOf(input) >= 0) {
   if (input === 'subtract' && (lastInputWasOperator || display.innerText === '0')) {
    display.innerText = "-" + display.innerText;
   } else {
    if (lastInputWasOperator) {
     workingOperation = input;
    } else if (trailingResult.toString() === display.innerText) {
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
    lastInputWasOperator = true;
   }

 } else if (input === "equals") {
  display.innerText = calculate(trailingResult, display.innerHTML, workingOperation);
  trailingResult = 0;
  workingOperation = '';
  lastInputWasOperator = false;
 } else if (input === "decimal") {
  
  if (display.innerText.indexOf(".") === -1) {
   display.innerText += ".";
  }
  lastInputWasOperator = false;

 } else {
  if (display.innerText === '0') {
   display.innerText = input;
  } else {
   display.innerText = 
  }
 }
 else if (input === "negative-value") {

  if (display.innerHTML.indexOf("-") === -1) {
   display.innerHTML = "-" + display.innerHTML
  } else if (display.innerHTML.indexOf("-") > -1) {
   display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
  }
  lastInputWasOperator = false;

 } else {
  if (display.innerHTML === "0") {
   display.innerHTML = input;
  } else {
   display.innerText += input;
  }
  lastInputWasOperator = false;
 }
}

const calculate = (firstNum, secondNum, operation) => {
 let result;
 firstNum = parseFloat(firstNum);
 secondNum = parseFloat(secondNum)
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
 return result;
}

const clearDisplay = () => {
 display.innerText = 0;
 trailingResult = 0;
}