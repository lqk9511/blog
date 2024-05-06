import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class NYStyleCheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.getName}`)
    this.clam = this.ingredientFactory.createClam()
  }
}
