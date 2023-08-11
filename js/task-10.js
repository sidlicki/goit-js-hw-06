function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const amount = document.querySelector("input");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  container.innerHTML = "";
}

function createBoxes() {
  container.innerHTML = ""; //для очищення сторінки перед кожним викликом функції створення
  //можна прибрати - тоді функція буде тільки будувати додатково
  const startSize = 30;
  const value = amount.value;
  for (let i = 0; i < value; i += 1) {
    const div = `<div style="height: ${startSize + i * 10}px; width: ${
      startSize + i * 10
    }px; background-color: ${getRandomHexColor()};" ></div>`;
    container.insertAdjacentHTML("beforeend", div);
  }
}
