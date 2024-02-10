// Напишите функцию RandomNumber которая возвращает Promis, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10 . если возникла ошибка при генерации числа , Promise должен быть отклонен с сообщением об ошибке.
const generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNamber = Math.floor(Math.random() * 10) +1;
            if(randomNamber) {
                resolve(randomNamber);
            }else {
                reject("error random number")
            }
            
        }, 10000);
        
    });
}
generateRandomNumber()
  .then((number) => {
    console.log("Сгенерираванно случайное число", number);
    
  }).catch((err) => {
    console.log("Error",number);
    
  });





  // напишите функцию fetchData(url),которая принимает url в качестве аргумента и возвращает promise должен резолвить ролученные данные. в случаи ошибки запроса ,Promise должен быть отклонен с сообщением об ошибке.




  let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
             .then((response) => response.json())
             .then((data) => resolve(data))
             .catch((error) => reject("Error loading data")); 
        
    });
  };

  fetchData("https://www.rbc.ru/")
     .then((data) => {
        console.log("полученны данные",data);
        
     }).catch((err) => {
        console.log("error");
        
     });




// проверка на сущемтвования файлов 

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExist = checkFileExists(file);
            if(fileExist) {
                resolve("файл существует ")
            }else {
                reject("файл не существует")
            }
            
        }, 2000);
    });
}


checkFileExists('randomNumber.js')
.then((message) => {
    console.log(message);
    
}).catch((error) => {
    console.log('error',error);
    
});