document.getElementById("incrementbtn").addEventListener("click", incrementCounter);
document.getElementById("decrementbtn").addEventListener("click", decrementCounter);
document.getElementById("resetbtn").addEventListener("click", resetCounter);

let counterDisplay = document.getElementById("counter-display");
let counterValue = 0;

function updateCounterDisplay() {
  counterDisplay.textContent = counterValue;
}

function incrementCounter() {
  counterValue++;
  updateCounterDisplay();
}

function decrementCounter() {
  if (counterValue > 0) {
    counterValue--;
    updateCounterDisplay();
  }
}

function resetCounter() {
  counterValue = 0;
  updateCounterDisplay();
}