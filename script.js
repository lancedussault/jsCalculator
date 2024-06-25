const display = document.getElementById("display");
let trailingResult = 0;
const operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = '';

const updateDisplay = input => {
 if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {

  if (input === "decimal") {
   display.innerHTML = "0."
  } else {
   display.innerHTML = input;
  }

 } else if (operationOptions.indexOf(input) >= 0) {

  if (workingOperation === '') {
   workingOperation = input;
   trailingResult = display.innerHTML;
   display.innerHTML = 0;
  } else {
   trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
   display.innerHTML = 0;
   workingOperation = input;
  }

 } else if(input === "equals") {
  display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
  trailingResult = display.innerHTML;
  workingOperation = '';
 } else if(input === "decimal") {
  
 } else {
  display.innerText += input;
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
}