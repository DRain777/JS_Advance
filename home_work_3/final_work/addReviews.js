// Дожидаемся загрузки DOM перед выполнением кода
document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылку на форму отзыва
  const reviewForm = document.querySelector(".boxReview__form");
  // Получаем ссылку на поле ввода названия продукта
  const productNameInput = document.getElementById("boxReview__product");
  // Получаем ссылку на текстовое поле ввода отзыва
  const reviewTextInput = document.getElementById("boxReview__text");
  // Получаем ссылку на элемент для отображения сообщения об ошибке
  const errorDiv = document.querySelector(".boxReview__error-msg");

  // Добавляем обработчик события "submit" для формы отзыва
  reviewForm.addEventListener("submit", function (event) {
    // Предотвращаем стандартное действие браузера при отправке формы
    event.preventDefault();

    // Получаем значение названия продукта из поля ввода и удаляем пробельные символы по краям
    const productName = productNameInput.value.trim();
    const reviewText = reviewTextInput.value.trim();

    // Проверяем, что оба поля не пусты
    if (productName === "" || reviewText === "") {
      // Если хотя бы одно из полей пустое, показываем сообщение об ошибке
      errorDiv.classList.remove("hidden"); // Удаляем класс 'hidden', чтобы сообщение стало видимым
      errorDiv.textContent = "Поля не заполнены!"; // Устанавливаем текст сообщения
    } else {
      // Если оба поля заполнены, скрываем сообщение об ошибке
      errorDiv.classList.add("hidden"); // Добавляем класс 'hidden', чтобы сообщение стало скрытым
      // Сохраняем отзыв в локальном хранилище
      saveReview(productName, reviewText);
      // Очищаем форму отзыва после сохранения
      reviewForm.reset();
      // Если отзыв успешно добавлен, скрываем сообщение об ошибке
      errorDiv.classList.add("hidden");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const reviewForm = document.querySelector(".boxReview__form");
//   const productNameInput = document.getElementById("boxReview__product");
//   const reviewTextInput = document.getElementById("boxReview__text");
//   const errorDiv = document.querySelector(".boxReview__error-msg");
//   const addButton = document.querySelector(".boxReview__btn"); // Получаем кнопку "Добавить отзыв"

//   // Добавляем обработчик события "click" для кнопки "Добавить отзыв"
//   addButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     const productName = productNameInput.value.trim();
//     const reviewText = reviewTextInput.value.trim();

//     if (productName === "" || reviewText === "") {
//       errorDiv.classList.remove("hidden");
//       errorDiv.textContent = "Поля не заполнены!";
//     } else {
//       errorDiv.classList.add("hidden");
//       saveReview(productName, reviewText);
//       reviewForm.reset();
//       errorDiv.classList.add("hidden");
//     }
//   });




