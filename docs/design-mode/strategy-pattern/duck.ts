import { FlyBehavior, FlyNoWay } from './fly-behavior'
import { Quack, QuackBehavior } from './quack-behavior'

export abstract class Duck {
  flyBehavior!: FlyBehavior
  quackBehavior!: QuackBehavior

  abstract display(): void

  public performFly() {
    this.flyBehavior.fly()
  }

  public performQuack() {
    this.quackBehavior.quack()
  }

  public performSwim() {
    console.log('All ducks float, even decoys!')
  }

  public setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior
  }
}
