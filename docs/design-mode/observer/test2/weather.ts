import { Observable } from "./observable";

export class WeatherData extends Observable {
  private temperature: number = 0
  private pressure: number = 0

  public measurementsChanged() {
    this.setChanged()
    this.notifyObservers()
  }

  public setMeasurements(temperature: number, pressure: number) {
    this.temperature = temperature
    this.pressure = pressure
    this.measurementsChanged()
  }

  public get getTemperature() {
    return this.temperature
  }

  public get getPressure() {
    return this.pressure
  }
}
