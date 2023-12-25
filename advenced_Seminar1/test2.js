/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:

const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];
// console.log(books[2]);
// console.log(books[2].title); // Вывод: "Fahrenheit 451"
// console.log(books[2].author); // Вывод: "Ray Bradbury"

// const library = {
//   books,
//   [Symbol.iterator] () {
//     let i = 0;
//     const array = this.books;
//     return{
//       next() {
//         return i < array.length ? {done:false, value: array[i++]} : { done: true}
//       }
//     }
//   }


// };

// for (const book  of library) { 
//   console.log(book);
  
// }





const library1 = {
  books,

  *[Symbol.iterator]() {
    for (const book of this.books) {
      yield book; // функция генератор
    }
  },
};

for (const book of library1) {
  console.log(book);
}








// Давайте разберём ваш код по шагам:


// const library1 = { books, ... }: Вы создаёте объект library1 с одним свойством books, которому присваивается значение массива books, который, предположительно, у вас уже был определён ранее.

// *[Symbol.iterator]() { ... }: Это специальный вид функции, называемой функцией-генератором, который используется для определения итератора для объекта. Итератор — это объект с методом next(), который возвращает объект с двумя свойствами: value (значение текущего элемента) и done (логическое значение, указывающее, закончены ли все элементы).

// for (const book of this.books) { yield book; }: Этот цикл for...of используется для прохода через массив books и возвращает каждую книгу одну за другой с использованием ключевого слова yield. Функция-генератор приостанавливает своё выполнение после каждого yield, что позволяет итератору возвращать одно значение за раз.

// После создания объекта library1 с итератором, вы используете его следующим образом:

// javascript
// Copy code
// for (const book of library1) {
//   console.log(book);
// }
// В этом цикле for...of вы проходитесь по каждой книге в library1, и для каждой книги вызывается метод console.log(book), выводя её в консоль.
// Таким образом, весь код позволяет вам использовать объект library1 как итерируемый объект, проходящий по всем книгам из массива books с использованием цикла for...of.