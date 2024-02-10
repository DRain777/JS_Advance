// Вы разрабатываите протокол  веб-приложения для чтения новостей . Статьи " Хронятся" Во внутренем массиве (имитирую базу данных). Когда пользователь нажимает кнопку загрузить новости , ваш код должен имитировать задержку, словно происходит реальная  загрузка данных из внешнего источника, а после этой задержки - отображать новости на странице.

// 1.Создайте базувую htm-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. реализуйте  функцию  fetchNews(), возвращающая промис. Эта функция должна имитировать задержку в 2 секунду перед успешным возвращением данных из (Вертуальной базы данных ). Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку (Загрузить новости ) вызывайте функцию  fetchNews() , обрабатывая успешное  выполнения и ошибки с использованием then() и catch(). При успешной загрузке отобразите статьи на странице. При ошибки покажите сообщения об ошибки.

// 4. Добавьте функционал , которорый отключает кнопку загрузки на время (загрузки) новостей и активирует ее снова после завершения операция (будь то успешная загрузка или ошибка).


const articlsArr = [
  {
    title: "first",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod, reiciendis laboriosam vel fugiat autem accusamus! Cum, quis. Adipisci, tempora consectetur. Consectetur, debitis eaque ipsam sit animi reiciendis quis commodi.",
  },

  {
    title: "second",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod, reiciendis laboriosam vel fugiat autem accusamus! Cum, quis. Adipisci, tempora consectetur. Consectetur, debitis eaque ipsam sit animi reiciendis quis commodi.",
  },

  {
    title: "third",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quod, reiciendis laboriosam vel fugiat autem accusamus! Cum, quis. Adipisci, tempora consectetur. Consectetur, debitis eaque ipsam sit animi reiciendis quis commodi.",
  },
];



function fetchNews(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const randomNumber = Math.random()
            if(randomNumber > 0.5) {
                resolve(articlsArr);
            }else{
                reject('error 404')
            }
            resolve(articl)
        }, 2000);

        
    });

}

const btnElement = document.querySelector(".addNews");
const divElement = document.querySelector(".news");
btnElement.addEventListener('click',() =>{
    btnElement.disabled = true;   
    const promis = fetchNews();
    promis
      .then((result) => {
        divElement.innerHTML = result
          .map(
            (article) => `<div>
    <h3> ${article.title} </h3>
    <p>${article.text} </p>
     </div>`
          )
          .join("");
      })
      .catch((error) => console.log(error))
      .finally(btnElement.disabled = false);
    

});





// gb



// const articlsArr = [
//   {
//     title: "Hello",
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate quisquam quis placeat perspiciatis voluptas reprehenderit fugit accusantium inventore qui officiis pariatur nisi eveniet quam sit amet necessitatibus, nemo illum!",
//   },
//   {
//     title: "Hi",
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate quisquam quis placeat perspiciatis voluptas reprehenderit fugit accusantium inventore qui officiis pariatur nisi eveniet quam sit amet necessitatibus, nemo illum!",
//   },
//   {
//     title: "Good day",
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate quisquam quis placeat perspiciatis voluptas reprehenderit fugit accusantium inventore qui officiis pariatur nisi eveniet quam sit amet necessitatibus, nemo illum!",
//   },
// ];
// function fetchNews() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber > 0.5) {
//         resolve(articlsArr);
//       } else {
//         reject(new Error("404"));
//       }
//     }, 2000);
//   });
// }
// const btnEl = document.querySelector(".addNews");
// const divEl = document.querySelector(".news");
// btnEl.addEventListener("click", () => {
//   btnEl.disabled = true;
//   const promis = fetchNews();
//   promis
//     .then((result) => {
//       divEl.innerHTML = result
//         .map(
//           (article) => `<div>
//         <h3>${article.title}</h3>
//         <p>${article.text}</p>
//         </div>`
//         )
//         .join("");
//     })
//     .catch((error) => console.log(error))
//     .finally(() => (btnEl.disabled = false));
// });