console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

pizzaInput2.addEventListener("input", () => {
  calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});
// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (diameter1 / 2) ** 2 * Math.PI;
  const area2 = (diameter2 / 2) ** 2 * Math.PI;
  const areaGain = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(areaGain);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = displaySize + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  if (size1 < size2) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
