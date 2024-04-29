export interface FlyBehavior {
  fly(): void
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log('I can not fly')
  }
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('I am flying!')
  }
}
