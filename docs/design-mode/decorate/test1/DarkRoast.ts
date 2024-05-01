import { Beverage } from "./Beverage";

/**
 * 深度烘培浓缩咖啡
 */
export class DarkRoast extends Beverage {
  constructor() {
    super()
    this.description = "Dark Roast coffee";
  }

  cost(): number {
    return 1.75;
  }
}
