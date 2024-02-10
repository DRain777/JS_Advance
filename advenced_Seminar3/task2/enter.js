'use strict'

const btlEl = document.querySelector(".btn");
const inputLoginEl = document.querySelector(".login");
const inputpasword = document.querySelector(".password");
const messageeEl = document.querySelector(".message");


btlEl.addEventListener('click',() => {
    const user = findUser(inputLoginEl.value);
    if( user && user.password === inputpasword.value ){
        authUser(inputLoginEl.value);
       window.location.href = "pagesHello.html";
    }else{
        messageeEl.textContent = "Не верный логин и пароль";
    }



})
