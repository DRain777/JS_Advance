// console.log(window);



// const newWindow = window.open('https://www.example.com' ,'_blank');// Открывает новое окно браузера _blank - открыть окно в новой вкладки
// window.close();// закрывает текущее окно
// window. resizeTo(800,600);// Изменяет размер окна на 800х600 пикселей
function sayHello() {
    console.log('hello');
    
}

console.log(sayHello.name); //   выводит имя функции  sayHello
console.log(window.name); // выводит имя окна браузера , пустую строку или имя окна ,если оно было заданно 


class Rectangl  {
    constructor( width, height) {
        this.width = width;
        this.height = height;
    }

}

const rect = new Rectangl(10,5);
console.log(rect.constructor.name); // выводит имя класса "Rectangl" через свойства name конструктор обьекта


let localFunc = () => 'localFunc' 
console.log(localFunc());


const result = (a,b) => a + b;
console.log(result(5,5));


const stringArr = ["rain","west","sun"]
const arr =[1,4,3,2,1,8,];
arr.filter(item => item > 3);
console.log(arr.filter(item => item > 3));

stringArr.filter((item) => item === "sun");
console.log(stringArr.filter((item) => item === "sun"));