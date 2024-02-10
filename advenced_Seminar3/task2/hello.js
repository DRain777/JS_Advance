const userLogin = getAuthedUser();
const messageEl = document.querySelector(".message");


if(!userLogin) {
    window.location.href = "pagesHello.html";
}else{ 
    document.body.textContent = ` hellow ${userLogin}`;

}


const btnEl = document.querySelector(".btnExit");
btnEl.addEventListener("click", () => {
  logout();
  window.location.href = "login.html";
});






