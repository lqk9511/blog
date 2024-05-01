import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./Condiment";

export class Whip extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Whip`;
  }

  cost(): number {
    return 0.3 + this.beverage.cost();
  }
}
