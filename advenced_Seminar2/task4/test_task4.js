"use strict";
/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/
const  inputElement = document.querySelector(".user-input");
const btnElement = document.querySelector(".add-button");
const ulElement = document.querySelector(".item-list");
const divElement = document.querySelector(".error-message");


btnElement.addEventListener('click',() => {
  try {
    if(inputElement.value.length < 3 || inputElement.value.length >10  ) {
        throw new Error ("Значение не сответствует требованиям")
    } else {
        divElement.textContent = "Попытка добавления элемента завершена";
    }
    
  } catch (error) {
     divElement.textContent = "Error";
    
  }

})