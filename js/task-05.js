let nameInput = document.querySelector("#name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateValue);

function updateValue(e) {
  if (e.currentTarget.value.trim() != "") {
    nameOutput.textContent = e.currentTarget.value.trim();
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
