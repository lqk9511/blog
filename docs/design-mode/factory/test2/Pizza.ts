export abstract class Pizza {
  name!: string;
  dough!: string;
  sauce!: string;
  toppings: any[] = []

  prepare() {
    console.log(`Preparing ${this.name}`);
    console.log("Tossing dough...");
    console.log("Adding sauce...");
    console.log("Adding toppings:");
    for (let i = 0; i < this.toppings.length; i++) {
      const element = this.toppings[i];
      console.log(`   ${element}`);
    }
  }

  bake() {
    console.log("Bake for 25 minutes at 350");
  }
  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }
  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  get getName() {
    return this.name;
  }
}
