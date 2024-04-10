const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  if (age > 12 && age < 20) {
    document.getElementById("output").textContent = "You are a teen.";
    console.log("Your are a teen.");
  } else {
    document.getElementById("output").textContent = "You are not a teen.";
    console.log("You are not a teen.");
  }

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
