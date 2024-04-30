import { Observer } from "./observer";

export class Observable {
  private observers: Observer[] = [];
  private changed: boolean = false;

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }

  public removeObserver(o: Observer) {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  public notifyObservers(arg?: any) {
    if (this.hasChanged) {
      for (let i = 0; i < this.observers.length; i++) {
        const o = this.observers[i];
        o.update(this, arg);
      }
      this.clearChanged()
    }
  }

  public setChanged() {
    this.changed = true;
  }

  public clearChanged() {
    this.changed = false
  }

  public get hasChanged() {
    return this.changed
  }
}
