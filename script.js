const display = document.getElementById("display");

const updateDisplay = num => {
 if (display.innerText === "0") {
  display.innerText = num;
 } else if() {
 
 } else {
  display.innerText += num;
 }
}

const clearDisplay = () => {
 display.innerText = 0;
}