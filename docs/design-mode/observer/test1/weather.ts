import { Observer } from "./observer";
import { Subject } from "./subject";

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.pressure = 0;
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (let index = 0; index < this.observers.length; index++) {
      const o = this.observers[index];
      o.update({
        temperature: this.temperature,
        pressure: this.pressure,
      });
    }
  }

  measurementsChange() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, pressure: number) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.measurementsChange();
  }
}
