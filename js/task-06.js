const inputString = document.querySelector("#validation-input");

inputString.addEventListener("blur", onInput);

function onInput(evt) {
  if (evt.currentTarget.value.length === parseInt(inputString.dataset.length)) {
    evt.target.classList.add("valid");
    evt.target.classList.remove("invalid");
  } else {
    evt.target.classList.add("invalid");
    evt.target.classList.remove("valid");
  }
}
