// // Напишите функцию setCookie (name,value ,days), которая установливает
//  cookie с указанным именем,значением и сроком действия в днях.
let setCookie = (name,value,days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + "; expires=" + expirationDate.
    toUTCString();
    document.cookie = name + "=" + cookieValue;
};
setCookie("username", "Tomas Anderson",7);
setCookie("userinfo", "Neo", 3);

// Напиши значения  getCookie(name) которая возвращает значение с указанным именем.



let getCookie = (name) => {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};


// let getCookie = (name) => {
//     let cookies = document.cookie.split(";");
//     for(let cookie of cookies){
//         let [cookieName, cookieValue] = cookie.trim().split(";");
//         if(cookieName === name) {
//             return decodeURIComponent(cookieValue)
//         }
//     }
//     return null;
// };
let username = getCookie("username");
console.log("значение сcookie  'username':",username);






// Напишите функцию удалить getCookie(nme), которая удаляет cookie с еказанным именем.




let deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};



// let deleteCookie = (name) => {
//     document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// };

 deleteCookie('username');
  deleteCookie("userunfo");

