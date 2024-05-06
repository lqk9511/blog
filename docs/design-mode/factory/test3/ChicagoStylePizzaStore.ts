import { ChicagoStyleCheesePizza } from "./ChicagoStyleCheesePizza";
import { ChicagoStyleClamPizza } from "./ChicagoStyleClamPizza";
import { ChicagoStyleVeggiePizza } from "./ChicagoStyleVeggiePizza";
import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";
import { PizzaType } from "./const";

export class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const ingredientFactory = new NYPizzaIngredientFactory();

    if (type === PizzaType.cheese) {
      pizza = new ChicagoStyleCheesePizza(ingredientFactory);
      pizza.setName = "Chicago Style Cheese Pizza";
    } else if (type === PizzaType.clam) {
      pizza = new ChicagoStyleClamPizza(ingredientFactory);
      pizza.setName = "Chicago Style Clam Pizza";
    } else if (type === PizzaType.veggie) {
      pizza = new ChicagoStyleVeggiePizza(ingredientFactory);
      pizza.setName = "Chicago Style Veggie Pizza";
    }

    return pizza!;
  }
}
