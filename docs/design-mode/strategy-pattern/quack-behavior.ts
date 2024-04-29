export interface QuackBehavior {
  quack(): void
}

export class Quack implements QuackBehavior {
  quack() {
    console.log('Quack')
  }
}

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<Silence>')
  }
}
