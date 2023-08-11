const loginForm = document.querySelector(".login-form"); //доступ до форми

loginForm.addEventListener("submit", onSubmit); //зчитування натиснення кнопки сабміт

function onSubmit(evt) {
  evt.preventDefault(); //вимикаю дефолтну поведінку

  const { email, password } = evt.currentTarget.elements; //витягую емейл та пароль як елементи вибраної форми
  const userData = {
    //створюю об'єкт куди присвоюю отриманні значення з форми
    Email: email.value,
    Password: password.value,
  };

  if (email.value && password.value) {
    //роблю перевірку чи поля заповнені
    console.log(userData); //виведенння в консоль об'єкту
    loginForm.reset(); //ресет форми
  } else {
    alert("Заповніть всі поля для логування :)"); //алерт якщо умова вище не виконана
  }
}
