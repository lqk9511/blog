import { ChicagoStyleCheesePizza } from "./ChicagoStyleCheesePizza";
import { ChicagoStyleClamPizza } from "./ChicagoStyleClamPizza";
import { ChicagoStyleVeggiePizza } from "./ChicagoStyleVeggiePizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";
import { PizzaType } from "./const";

export class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    if (type === PizzaType.cheese) {
      pizza = new ChicagoStyleCheesePizza();
    } else if (type === PizzaType.clam) {
      pizza = new ChicagoStyleClamPizza();
    } else if (type === PizzaType.veggie) {
      pizza = new ChicagoStyleVeggiePizza();
    }

    return pizza!;
  }
}
