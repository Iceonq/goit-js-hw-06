const range = document.getElementById("font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", (e) => {
  text.style.fontSize = `${e.target.value}px`;
});
