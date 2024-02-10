class Library {
 
  #books;
 

  constructor(arrayBooks) {

   
    // Проверка наличия дубликатов в начальном списке книг
    if (new Set(arrayBooks).size !== arrayBooks.length) {
      throw new Error("Начальный список книг содержит дубликаты.");
    }

    this.#books = arrayBooks;
    
  }

  // Геттер-функция для получения текущего списка книг
  get allBooks() {
    return this.#books;
  }

  // Метод для добавления книги в список
  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга с названием "${title}" уже существует в списке.`);
    }

    this.#books.push(title);
  }

  // Метод для удаления книги из списка по названию
  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index !== -1) {
      this.#books.splice(index, 1);
    } else {
      throw new Error(`Книги с названием "${title}" нет в списке.`);
    }
  }

  // Метод для проверки наличия книги в библиотеке
  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Пример использования класса
try {
  const arrayBooks = ["Book1", "Book2", "Book3"];
  const library = new Library(arrayBooks);

  // Получение текущего списка книг с использованием геттера
  const booksList = library.allBooks;
  console.log("Текущий список книг:", booksList);

  // Добавление новой книги
  library.addBook("New Book");
  console.log("Книга успешно добавлена.");

  // Проверка наличия книги
  const hasBook = library.hasBook("Book1");
  console.log(`Есть ли книга "Book1" в списке? ${hasBook}`);

  // Удаление книги
  library.removeBook("Book2");
  console.log("Книга успешно удалена.");

  // Попытка удалить несуществующую книгу (вызов ошибки)
  library.removeBook("Nonexistent Book");
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
}

