const userName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
userName.addEventListener("input", onInput);

function onInput(evt) {
  nameOutput.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  }
}
