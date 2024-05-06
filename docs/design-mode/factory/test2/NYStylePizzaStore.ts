import { NYStyleCheesePizza } from "./NYStyleCheesePizza";
import { NYStyleClamPizza } from "./NYStyleClamPizza";
import { NYStyleVeggiePizza } from "./NYStyleVeggiePizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";
import { PizzaType } from "./const";

export class NYStylePizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    if (type === PizzaType.cheese) {
      pizza = new NYStyleCheesePizza();
    } else if (type === PizzaType.clam) {
      pizza = new NYStyleClamPizza();
    } else if (type === PizzaType.veggie) {
      pizza = new NYStyleVeggiePizza();
    }

    return pizza!;
  }
}
