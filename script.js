const display = document.getElementById("display");
let trailingResult = 0;
const operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = '';
let lastInputWasOperator = false;

const updateDisplay = input => {
 //If the number is 0 & the input is not a legitimate working operation...
  if (display.innerText === "0" && operationOptions.indexOf(input) === -1) {
   //If the decimal button is selected, apend a decimal to 0
    if (input === "decimal") {
      display.innerText = "0.";
      //If it is not an operation or decimal, it is a number. Update the display to reflect the input
    } else {
      display.innerText = input;
    }
    //The last input was not an operator
    lastInputWasOperator = false;
    //If a legitimate operation is selected...
  } else if (operationOptions.indexOf(input) >= 0) {
   // if the input is "-" & their was an operation selected before this & the display is not 0 **I need to make sure the the display text is not zero
    if (input === 'subtract' && lastInputWasOperator && display.innerText !== "0") {
     //The number must be negative. Update the display to refect this. 
      display.innerText = "-" + display.innerText;

      if (input === 'add' && lastInputWasOperator) {
       display.innerText = '';
      }

    } else {
     //Otherwise the last input was an operator, either... 
      if (lastInputWasOperator) {
       //Update the working operation to the latest input
        workingOperation = input;
        //If the saved number is equal to the display number, update the working operation the the latest input (?)
      } else if (trailingResult.toString() === display.innerText) {
        workingOperation = input;
        //If there is not working operation, make the latest input the working operation
      } else if (workingOperation === '') {
        workingOperation = input;
        trailingResult = display.innerText;
        display.innerText = '';
      } else {
        trailingResult = calculate(trailingResult, display.innerText, workingOperation);
        display.innerText = '';
        workingOperation = input;
      }
      lastInputWasOperator = true;
    }
  } else if (input === "equals") {
    display.innerText = calculate(trailingResult, display.innerText, workingOperation);
    trailingResult = 0;
    workingOperation = '';
    lastInputWasOperator = false;
  } else if (input === "decimal") {
    if (display.innerText.indexOf(".") === -1) {
      display.innerText += ".";
    }
    lastInputWasOperator = false;
  } else {
    if (display.innerText === "0") {
      display.innerText = input;
    } else {
      display.innerText += input;
    }
    lastInputWasOperator = false;
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
  lastInputWasOperator = false;
}
