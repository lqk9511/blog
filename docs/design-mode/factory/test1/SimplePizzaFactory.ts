import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { Pizza } from "./Pizza";
import { VeggiePizza } from "./VeggiePizza";
import { PizzaType } from "./const";

export class SimplePizzaFactory {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    if (type === PizzaType.cheese) {
      pizza = new CheesePizza();
    } else if (type === PizzaType.clam) {
      pizza = new ClamPizza();
    } else if (type === PizzaType.veggie) {
      pizza = new VeggiePizza();
    }

    return pizza!;
  }
}
