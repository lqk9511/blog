import { CurrentConditionDisplay } from "./current-condition-display";
import { WeatherData } from "./weather";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionDisplay(weatherData);

weatherData.setMeasurements(100, 400)
