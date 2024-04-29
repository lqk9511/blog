import { Duck } from './duck'
import { FlyNoWay, FlyWithWings } from './fly-behavior'
import { Quack } from './quack-behavior'

class MallardDuck extends Duck {
  constructor() {
    super()
    super.flyBehavior = new FlyNoWay()
    this.quackBehavior = new Quack()
  }

  display() {
    console.log('I am a real Mallard duck!')
  }
}

const mallard = new MallardDuck()
mallard.performQuack()
mallard.performFly()
mallard.setFlyBehavior(new FlyWithWings())
mallard.performFly()
