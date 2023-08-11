const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", sizeControl);

function sizeControl(evt) {
  text.style.fontSize = `${evt.target.value}px`;
}
