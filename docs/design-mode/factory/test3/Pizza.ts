import { ClamType } from "./const";

export abstract class Pizza {
  name!: string;
  dough!: string;
  sauce!: string;
  clam!: ClamType;

  abstract prepare(): void;

  bake() {
    console.log("Bake for 25 minutes at 350");
  }
  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }
  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  set setName(name: string) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }
}
