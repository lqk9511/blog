import { ClamType } from "./const";

export interface PizzaIngredientFactory {
  createClam(): ClamType;
  // ...
}
