import { Pizza } from "./Pizza";
import { PizzaType } from "./const";

export abstract class PizzaStore {
  abstract createPizza(type: PizzaType): Pizza;

  public orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
