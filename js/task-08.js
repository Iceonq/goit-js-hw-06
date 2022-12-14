const input = document.querySelector(".login-form");
console.log(input);
input.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Wszystkie pola powinny zostać wypełnione");
  } else {
    console.log({ email: email.value }, { password: password.value });
    event.currentTarget.reset();
  }
}
