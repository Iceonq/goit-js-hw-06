const input = document.getElementById("validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", (e) => {
  if (e.target.value.length >= inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  console.log(e.target.value.length);
});
