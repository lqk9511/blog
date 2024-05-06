import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { ClamType } from "./const";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createClam(): ClamType {
    // return new Clam
    return ClamType.chilled;
  }
}
