import { DarkRoast } from "./DarkRoast";
import { Espresso } from "./Espresso";
import { Mocha } from "./Mocha";
import { Whip } from "./Whip";

const beverage1 = new Espresso()
console.log(`${beverage1.getDescription()} ${beverage1.cost()}`)

let beverage2 = new DarkRoast()
beverage2 = new Mocha(beverage2)
beverage2 = new Mocha(beverage2)
beverage2 = new Whip(beverage2)

console.log(`${beverage2.getDescription()} ${beverage2.cost()}`)
