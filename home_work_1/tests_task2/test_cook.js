class Manager {
  constructor() {
    this.chefsSpecialties = new Map([
      ["Олег", "Пицца"],
      ["Андрей", "Суши"],
      ["Анна", "Десерты"],
    ]);

    this.menu = new Map([
      ["Пицца Маргарита", "Пицца"],
      ["Пицца Пепперони", "Пицца"],
      ["Пицца Три сыра", "Пицца"],
      ["Суши Филадельфия", "Суши"],
      ["Суши Калифорния", "Суши"],
      ["Суши Чизмаки", "Суши"],
      ["Суши Сеякемаки", "Суши"],
      ["Десерт Тирамису", "Десерты"],
      ["Десерт Чизкейк", "Десерты"],
    ]);

    this.orders = new Map();
  }

  newOrder(client, ...items) {
    console.log(`Клиент ${client.firstname} ${client.lastname} заказал:`);

    for (const item of items) {
      const itemName = `${item.type} ${item.name}`;
      const chef = this.getChefBySpecialty(item.type);

      if (chef) {
        if (this.menu.has(itemName)) {
          const orderKey = `${itemName} - ${item.quantity}`;
          this.orders.set(orderKey, chef);
          console.log(`${itemName} - ${item.quantity}; готовит повар ${chef}`);
        } else {
          console.log(`Ошибка: Блюда "${itemName}" не существует.`);
        }
      } else {
        console.log(`Ошибка: Нет повара для блюда "${itemName}".`);
      }
    }
  }

  getChefBySpecialty(specialty) {
    for (const [chef, chefSpecialty] of this.chefsSpecialties) {
      if (chefSpecialty === specialty) {
        return chef;
      }
    }
    return null;
  }
}

const manager = new Manager();

const clientIvan = new Client("Иван", "Иванов");
manager.newOrder(
  clientIvan,
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
