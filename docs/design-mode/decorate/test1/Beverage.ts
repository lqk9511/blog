export abstract class Beverage {
  description: string = "Unknow description";

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}
