import { DisplayElement } from "./display-element";
import { Observable } from "./observable";
import { Observer } from "./observer";
import { WeatherData } from "./weather";

export class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number;
  private pressure: number;
  private observable: Observable;

  constructor(observable: Observable) {
    this.temperature = 0;
    this.pressure = 0;
    this.observable = observable;
    observable.registerObserver(this);
  }

  update(obs: Observable, arg: any): void {
    if (obs instanceof WeatherData) {
      this.temperature = obs.getTemperature;
      this.pressure = obs.getPressure;
      this.display();
    }
  }

  display(): void {
    console.log(
      `Current condition ${this.temperature} F degrees and ${this.pressure} P pressure`
    );
  }
}
