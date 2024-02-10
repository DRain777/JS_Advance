"use strict";
const reviewKey = "review";
//  сохроняеет переданный [] в lS в виде строки
function saveReview(review) {
  const json = JSON.stringify; // медот преобразует массив в строку Json  localStorge может хранить только СТРОКИ!!!
  localStorage.setItem(review, json); // метод сохроняет строку json, по ключу review. Эта функция сохроняет переданный массив в локальное хранилище браузера!
}
// функция извлекает ранее сохраненные данные и преобоазует их [].
function getReview() {
  const data = localStorage.getItem(review); // получаем данные по ключу review из локального хранилища
  if (data === null) {
    // если данных нет возвращам пустой массив
    return [];
  }
  return JSON.parse(data); // если данные присутствуют метод JSON.parse преобразует сторку из localstorge обратно в массив
}

function addFeedback(userProduct, userFeedback) {
  // Получаем массив обратной связи из локального хранилища
  const productsArr = getReview();

  // Проверяем, если массив пустой, то создаем первый элемент обратной связи
  if (productsArr.length === 0) {
    const firstItem = {
      product: userProduct,
      feedbacks: [userFeedback],
    };
    productsArr.push(firstItem);
  } else {
    // Устанавливаем флаг, указывающий на нахождение продукта в массиве
    let isFound = false;

    // Перебираем массив обратной связи
    productsArr.forEach((item) => {
      // Если продукт уже существует в массиве, добавляем обратную связь к нему
      if (item.product === userProduct) {
        item.feedbacks.push(userFeedback);
        isFound = true;
      }
    });

    // Если продукт не найден, создаем новый элемент обратной связи
    if (!isFound) {
      const newItem = {
        product: userProduct,
        feedbacks: [userFeedback],
      };
      productsArr.push(newItem);
    }
  }

  // Сохраняем обновленный массив обратной связи в локальное хранилище
  saveReview(productsArr);
}
