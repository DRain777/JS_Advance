"use strict";
/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/
const inputElement = document.querySelector(".number-input");
console.log(inputElement);
const btnElement = document.querySelector(".check-button");
const divElement = document.querySelector(".message");
btnElement.addEventListener("click",() => console.log("hello"));

function hellowWorld() {
    console.log("hellow World");
}
// btnElement.addEventListener("click",hellowWorld);
// btnElement.addEventListener("click", () => {}); // использовать стрелочную функцию  

btnElement.addEventListener("click", () => {
    try {
        const number = +inputElement.value;
        // console.log( typeof number); 
        if(!Number.isFinite(number)) {
            throw new Error (` User input uncorrect number `);
        }
        divElement.textContent = ` User input number = ${number}`; // нужен для вывода текста на страницу!!!
        
    } catch (error) {
         divElement.textContent = "User input uncorrect number";
        
    }
}); 
