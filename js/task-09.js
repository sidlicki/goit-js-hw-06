function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//
const span = document.querySelector(".color"); //доступ до спан
const buttonChangeColor = document.querySelector(".change-color"); //доступ до кнопки
buttonChangeColor.addEventListener("click", onClick); //відслідковування кліка на кнопку

function onClick(evt) {
  if (evt) {
    let randomColor = getRandomHexColor(); //присвоєння рандомного кольору в зміну щоб два рази не викликати функцію
    //console.log(randomColor); //перевірка в консолі чи все працює
    document.body.style.backgroundColor = randomColor; //присвоєння кольору для фону сайту
    span.textContent = randomColor; // присвоєння коду кольору як текстове значення для спан
  }
}
