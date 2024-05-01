import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./Condiment";

export class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  cost(): number {
    return 0.2 + this.beverage.cost();
  }
}
