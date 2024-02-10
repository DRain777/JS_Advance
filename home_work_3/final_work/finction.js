// Функция для сохранения отзыва в локальном хранилище
function saveReview(productName, reviewText) {
  // Получаем список отзывов из локального хранилища, либо создаем новый массив, если отзывов нет
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  // Добавляем новый отзыв в конец массива
  reviews.push({ productName, reviewText });
  // Сохраняем обновленный список отзывов в локальном хранилище, преобразовав его в строку JSON
  localStorage.setItem("reviews", JSON.stringify(reviews));
  // Выводим сообщение об успешном добавлении отзыва
  alert("Отзыв успешно добавлен!");
}
// функция displayProducts() отоброжает список продукто и связанных на веб-странице.

// function displayProducts() {
//   // получаем массив продуктов с отзывами 
//   const productArr = 
// }




//   function saveReview(productName, reviewText) {
//     let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
//     reviews.push({ productName, reviewText });
//     localStorage.setItem("reviews", JSON.stringify(reviews));
//     alert("Отзыв успешно добавлен!");
//   }
// });
