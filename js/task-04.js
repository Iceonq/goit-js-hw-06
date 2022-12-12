const button = document.querySelector("button");
let span = document.querySelector("span");
let valueCounter = parseInt(document.querySelector("#value").textContent);

const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);

const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);

buttonDecrement.addEventListener("click", () => {
  valueCounter -= 1;
  span.textContent = valueCounter;
});

buttonIncrement.addEventListener("click", () => {
  valueCounter += 1;
  span.textContent = valueCounter;
});
