function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorHex = document.querySelector(".color");

button.addEventListener("click", (e) => {
  body.style.backgroundColor = getRandomHexColor();
  colorHex.textContent = body.style.backgroundColor;
});
