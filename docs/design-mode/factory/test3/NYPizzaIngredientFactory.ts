import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { ClamType } from "./const";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createClam(): ClamType {
    // return new Clam
    return ClamType.fresh;
  }
}
