import { DisplayElement } from "./display-element";
import { Observer } from "./observer";
import { Subject } from "./subject";

export class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number;
  private pressure: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.temperature = 0;
    this.pressure = 0;
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(data: { temperature: number; pressure: number }): void {
    const { temperature, pressure } = data;
    this.temperature = temperature;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(
      `Current condition ${this.temperature} F degrees and ${this.pressure} P pressure`
    );
  }
}
