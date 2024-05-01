import { Beverage } from "./Beverage";

/**
 * 浓缩咖啡
 */
export class Espresso extends Beverage {
  constructor() {
    super()
    this.description = "Espresso";
  }

  cost(): number {
    return 1.9;
  }
}
