/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const musicCollection = {
  albums: [
    {
      title: "Титаник",
      artist: "Лолита",
      year: "2018",
    },

    {
      title: "the Magic key ",
      artist: "T_One",
      year: "2003",
    },
  ],
};

// console.log(musicCollection.albums[1]);

const library = {
  musicCollection,

  *[Symbol.iterator]() {
    for (const album of this.musicCollection.albums) {
      yield album; // функция генератор
    }
  },
};

for (const album of library) {
  // console.log(album);
}

for (const albums of library) {
  console.log(
    `Название альбома: ${albums.title},  Исполнитель: ${albums.artist}, Год выпуска:${albums.year}`
  );
  // console.log(album);
}









const musicCollection1 = {
  albums: [
    {
      title: "Rolling in the Deep",
      artist: "Adela",
      year: "2011",
    },
    {
      title: "Close Eyas",
      artist: "DVRST",
      year: "2022",
    },
  ],
  // Итератор для музыкальной коллекции
  *[Symbol.iterator]() {
    for (const album of this.albums) {
      yield album;
    }
  },
};

for (const album of musicCollection1) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}