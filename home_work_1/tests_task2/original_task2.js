// A restaurant visitor.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Manager {
  constructor() {
    this.chefs = new Map();
    this.menu = new Map();
    this.orders = new Map();
    this.initChefs();
    this.initMenu();
  }

  initChefs() {
    this.chefs.set("Oleg", "Pizza");
    this.chefs.set("Andrey", "Sushi");
    this.chefs.set("Anna", "Dessert");
  }

  initMenu() {
    this.menu.set(
      "Pizza",
      new Set(["Margarita", "Pepperoni", "Three cheeses"])
    );
    this.menu.set(
      "Sushi",
      new Set(["Philadelphia", "California", "Chizmaki", "Seyakemaki"])
    );
    this.menu.set("Dessert", new Set(["Tiramisu", "Cheesecake"]));
  }

  validateOrder(type, name) {
    if (!this.menu.has(type) || !this.menu.get(type).has(name)) {
      throw new Error(`Dish "${name}" - there is no such dish.`);
    }
  }

  newOrder(client, ...items) {
    console.log(`Client ${client.firstname} ordered:`);
    items.forEach(({ name, quantity, type }) => {
      this.validateOrder(type, name);

      const chef = [...this.chefs.entries()].find(
        ([_, specialization]) => specialization === type
      )[0];

      if (!this.orders.has(chef)) {
        this.orders.set(chef, new Map());
      }

      const chefOrders = this.orders.get(chef);

      if (!chefOrders.has(name)) {
        chefOrders.set(name, 0);
      }

      chefOrders.set(name, chefOrders.get(name) + quantity);

      console.log(
        `${type} "${name}" - ${chefOrders.get(name)}; cook ${chef} prepares`
      );
    });
  }
}

// Example usage:
const manager = new Manager();

manager.newOrder(
  new Client("Ivan", "Ivanov"),
  { name: "Margarita", quantity: 1, type: "Pizza" },
  { name: "Pepperoni", quantity: 2, type: "Pizza" },
  { name: "Cheesecake", quantity: 1, type: "Dessert" }
);

console.log("---");

const clientPavel = new Client("Pavel", "Pavlov");
manager.newOrder(
  clientPavel,
  { name: "Philadelphia", quantity: 5, type: "Sushi" },
  { name: "California", quantity: 3, type: "Sushi" }
);

console.log("---");

manager.newOrder(
  clientPavel,
  { name: "California", quantity: 1, type: "Sushi" },
  { name: "Tiramisu", quantity: 2, type: "Dessert" }
);

console.log("---");

try {
  manager.newOrder(
    clientPavel,
    { name: "Philadelphia", quantity: 1, type: "Sushi" },
    { name: "Tube with boiled condensed milk", quantity: 1, type: "Dessert" }
  );
} catch (error) {
  console.error(error.message);
}
