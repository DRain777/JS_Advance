const btlEl = document.querySelector('.btn');
const inputLoginEl = document.querySelector(".login");
const inputpasword = document.querySelector(".password");


btlEl.addEventListener('click', () => {


    addUsers(inputLoginEl.value, inputpasword.value)
    // localStorage.setItem('login',inputLoginEl.value);
    // localStorage.setItem("password", inputpasword.value);
    window.location.href = "pagesEnter.html";


})