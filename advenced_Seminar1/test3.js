// Задание 4.
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
// Необходимо: 
// 1. Создать Map объект, который будет использоваться для хранения соответствия 
// между уроком и преподавателем, урок => преподаватель.
// 2. Необходимо создать Map объект, ключами которого будут объекты студентов,
// а значениями будут Set объекты, которые будут хранить уроки, посещенные 
// студентом.
// */
 


const lessonsTeacher = new Map();
lessonsTeacher
  .set("математика", "Cмирнов")
  .set("литература", " Ленин")
  .set("Анг.яз", "Петров");




const studentLessons = new Map();
const ivan = {
    name: "Иван",
};
const ivansLessons = new Set();
ivansLessons.add("литература");
ivansLessons.add( "Анг.яз");
studentLessons.set(ivan, ivansLessons);

// преподователь по математике Смирнов
console.log(`преподователь по математике: ${lessonsTeacher.get('математика')}  `);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${Array.from (studentLessons.get(ivan)).join(" ,")}`);











// const studentLessons = new Map();
// const ivan = {
//   name: "Иван",
// };

// const ivansLessons = new Set();
// ivansLessons.add("литература");
// ivansLessons.add("Анг.яз");
// studentLessons.set(ivan, ivansLessons);
// Здесь создается объект studentLessons типа Map, который отображает студентов на их уроки. ivan представляет студента Ивана, и его уроки представлены объектом ivansLessons, который является множеством (Set). Каждый студент и его уроки добавляются в studentLessons с использованием .set().

// Вывод информации в консоль:

// javascript
// Copy code
// console.log(`преподаватель по математике: ${lessonsTeacher.get('математика')}  `);
// console.log(`Уроки Ивана: ${Array.from(studentLessons.get(ivan)).join(" ,")}`);
// Этот код выводит информацию в консоль. Первая строка выводит имя преподавателя по математике с использованием lessonsTeacher.get('математика'). Вторая строка выводит уроки Ивана, преобразуя множество ivansLessons в массив (Array.from()) и затем объединяя его с использованием .join().