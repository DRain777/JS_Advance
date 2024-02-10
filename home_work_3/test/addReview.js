const formEl = document.querySelector("addProduct");// получаем ссылку на класс  "addProduct".
const btnEl = document.querySelector("btn");




formEl.addEventListener("input", event => {
  // Проверяем, содержит ли элемент указанный класс.
  if (!event.target.classList.contains("form-input")) {
    // Если нет, завершаем функцию.
    return;
  }
  // Проверяем, пустое ли значение в поле ввода.
  event.target.value === ""
    ? // Если значение пустое, добавляем класс error.
      event.target.classList.add("error")
    : // Если значение не пустое, удаляем класс error.
      event.target.classList.remove("error");
  // Функция отслеживает заполнения формы и подсвечивает пустые поля ввода.
});



// этот код обрабатывает отправку формы обратной связи, проверяет заполнение полей, выводит сообщение об ошибке, если какое-то поле пустое, и отправляет данные на сервер, если все поля заполнены
formEl.addEventListener("submit", (event) => {
  // Предотвращаем стандартное поведение отправки формы
  event.preventDefault();
  // Получаем ссылку на поле ввода продукта  
  const productInput = document.querySelector(".addProduct");
  // Получаем ссылку на поле ввода обратной связи 
   const feedbackInput = document.querySelector("addTextReview");
  // Проверяем, заполнены ли поля ввода
  if (productInput.value === "" || feedbackInput.value === "") {
    // Если одно из полей пустое, добавляем класс 'error' к полям ввода
    productInput.classList.add("error");
    feedbackInput.classList.add("error");
    // Показываем сообщение об ошибке   
     document.querySelector(".error-msg").classList.remove("hidden");
  } else {
    // Если оба поля заполнены, вызываем функцию addFeedback с введенными значениями
    addFeedback(productInput.value, feedbackInput.value); // Очищаем значения полей ввода
    productInput.value = "";
    feedbackInput.value = "";
  }
});






// // добовляем обработчик события 'input' на форму addProduct
// formEl.addEventListener('input',event => {
//   //  используется для проверки содержит ли элемент суказанный класс.DOM
//   if (!event.target.classList.contains("form-input")) {
//     // Если нет, завершаем функцию
//     return;
//   }
//   // Проверяем пустое ли значение в поле ввода
//   event.target.value === ""
//     ? // Если значение пустое добовляем класс error
//       event.target.classList.add("error")
//     : // если значение не пустое удаляем класс error
//       event.target.classList.remove("error");
//       // функция отслеживает заполнения формы и подсвечивает пустые поля в вода.
// } )

