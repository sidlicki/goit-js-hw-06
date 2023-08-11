let counterValue = 0;
const value = document.querySelector("#value");

const counter = document.querySelector("#counter");
counter.firstElementChild.addEventListener("click", minus);
counter.lastElementChild.addEventListener("click", plus);

function minus(evt) {
  if (evt) {
    counterValue -= 1;
    value.textContent = counterValue;
  }
}
function plus(evt) {
  if (evt) {
    counterValue += 1;
    value.textContent = counterValue;
  }
}
