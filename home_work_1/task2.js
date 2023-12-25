// ###Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
// на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
// коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
// актуально. Представленный ниже код должен работать.

// Повара и их специализации:
// Олег - специализация: Пицца.
// Андрей - специализация: Суши.
// Анна - специализация: Десерты.

// Блюда, которые могут заказать посетители:
// Пицца "Маргарита"
// Пицца "Пепперони"
// Пицца "Три сыра"
// Суши "Филадельфия"
// Суши "Калифорния"
// Суши "Чизмаки"
// Суши "Сеякемаки"
// Десерт Тирамису
// Десерт Чизкейк
// */




// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Класс для управления заказами и поварами.
class Manager {
  constructor() {
    // Список поварами и их специализациями.
    this.chefs = new Map();
    // Меню ресторана.
    this.menu = new Map();
    // Заказы клиентов.
    this.orders = new Map();
    // Инициализация поварами и меню.
    this.initChefs();
    this.initMenu();
  }

  // Инициализация поварами и их специализациями.
  initChefs() {
    this.chefs.set("Олег", "Пицца");
    this.chefs.set("Андрей", "Суши");
    this.chefs.set("Анна", "Десерт");
  }

  // Инициализация меню ресторана.
  initMenu() {
    this.menu.set("Пицца", new Set(["Маргарита", "Пепперон", "Три сыра"]));
    this.menu.set(
      "Суши",
      new Set(["Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки"])
    );
    this.menu.set("Десерт", new Set(["Тирамису", "Чизкейк"]));
  }

  // Проверка, существует ли блюдо в меню.
  validateOrder(type, name) {
    if (!this.menu.has(type) || !this.menu.get(type).has(name)) {
      throw new Error(`Блюдо "${name}" - такого блюда не существует.`);
    }
  }

  // Размещение нового заказа от клиента.
  newOrder(client, ...items) {
    console.log(`Клиент ${client.firstname} заказал:`);
    items.forEach(({ name, quantity, type }) => {
      this.validateOrder(type, name);

      // Нахождение повара по его специализации.
      const chef = [...this.chefs.entries()].find(
        ([_, specialization]) => specialization === type
      )[0];

      // Если повар еще не обрабатывает заказ, создаем запись о его заказах.
      if (!this.orders.has(chef)) {
        this.orders.set(chef, new Map());
      }

      const chefOrders = this.orders.get(chef);

      // Если блюдо еще не заказано, создаем запись о количестве заказанных блюд.
      if (!chefOrders.has(name)) {
        chefOrders.set(name, 0);
      }

      // Увеличиваем количество заказанных блюд.
      chefOrders.set(name, chefOrders.get(name) + quantity);

      // Вывод информации о заказе.
      console.log(
        `${type} "${name}" - ${chefOrders.get(name)}; повар ${chef} готовит`
      );
    });
  }
}

// Создание экземпляра класса Manager.
const manager = new Manager();

// Примеры заказов от клиентов.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперон", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);

console.log("---");

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);

console.log("---");

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);

console.log("---");

try {
  // Попытка заказать несуществующее блюдо.
  manager.newOrder(
    clientPavel,
    { name: "Филадельфия", quantity: 1, type: "Суши" },
    { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
  );
} catch (error) {
  console.error(error.message);
}
