import { Pizza } from "./Pizza";
import { SimplePizzaFactory } from "./SimplePizzaFactory";
import { PizzaType } from "./const";

export class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  orderPizza(type: PizzaType): Pizza {
    const pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
