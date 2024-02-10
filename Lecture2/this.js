// function regular() {
//     console.log(this);
    
// }


// const arrow = () =>{
//     console.log(this);
// }

//  regular();// выводит контекст ыыполнения ,например обьект windom (в браузере ) или обьект global в nodeJS<ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }

// [Done] exited with code=0 in 0.279 seconds

//  arrow();// выводит контекст ыыполнения , который был определен во время создания функции (лексический контекст) {}- выводит


//  внутри обьекта
const obj = {
    regularMethod:function () {
        console.log(this);
    },
    arrowMethod: () => {
        console.log(this);
    }
}

obj.regularMethod();// выводит обьект obj так как метод вызывается на обьекте obj
obj.arrowMethod(); //выводит контекст выполнения в котором была созданна стррелочная функция ( обьект window или Global)

// => снипит

const sum = (a,b) => a + b;
 console.log(sum(5, 5)); 
 arr.filter(item => item > 3);
 