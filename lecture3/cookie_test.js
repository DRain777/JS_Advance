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

let deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

deleteCookie("username");
