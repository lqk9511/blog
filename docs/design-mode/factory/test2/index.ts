import { ChicagoStylePizzaStore } from "./ChicagoStylePizzaStore";
import { NYStylePizzaStore } from "./NYStylePizzaStore";
import { PizzaType } from "./const";

const nyStore = new NYStylePizzaStore();
const chicagoStore = new ChicagoStylePizzaStore();

const pizza = nyStore.orderPizza(PizzaType.cheese);
console.log(`Ethan ordered a ${pizza.getName}`);

console.log(`----`);

const pizza2 = chicagoStore.orderPizza(PizzaType.cheese);
console.log(`Joel ordered a ${pizza2.getName}`);
