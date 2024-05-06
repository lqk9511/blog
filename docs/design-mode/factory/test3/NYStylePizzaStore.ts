import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { NYStyleCheesePizza } from "./NYStyleCheesePizza";
import { NYStyleClamPizza } from "./NYStyleClamPizza";
import { NYStyleVeggiePizza } from "./NYStyleVeggiePizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";
import { PizzaType } from "./const";

export class NYStylePizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    let pizza: Pizza;
    const ingredientFactory = new NYPizzaIngredientFactory()
    if (type === PizzaType.cheese) {
      pizza = new NYStyleCheesePizza(ingredientFactory);
      pizza.setName = 'New York Style Cheese Pizza'
    } else if (type === PizzaType.clam) {
      pizza = new NYStyleClamPizza(ingredientFactory);
      pizza.setName = 'New York Style Clam Pizza'
    } else if (type === PizzaType.veggie) {
      pizza = new NYStyleVeggiePizza(ingredientFactory);
      pizza.setName = 'New York Style Veggie Pizza'
    }

    return pizza!;
  }
}
