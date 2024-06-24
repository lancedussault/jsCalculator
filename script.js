const display = document.getElementById("display");
let trailingResult = 0;
const operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = '';

const updateDisplay = input => {
 if (display.innerText === "0" && operationOptions.indexOf(input) === -1) {
  display.innerText = input;
 } else if(operationOptions.indexOf(input) >= 0) {
  workingOperation = input;
  trailingResult = display.innerHTML;
  display.innerHTML = 0;
 } else if(input === "equals") {
  console.log(trailingResult, display.innerHTML);
  display.innerHTML = calculate(parseFloat(trailingResult), parseFloat(display.innerHTML), workingOperation);
  trailingResult = display.innerHTML;
 } else {
  display.innerText += input;
 }
}

const calculate = (firstNum, secondNum, operation) => {
 let result;
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