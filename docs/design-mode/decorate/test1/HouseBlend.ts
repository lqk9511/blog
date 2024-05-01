import { Beverage } from "./Beverage";

/**
 * 混合咖啡
 */
export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return 0.89;
  }
}
