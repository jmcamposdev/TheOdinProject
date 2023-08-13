import getWeatherData from '../apiCalls/apiCalls';
import printHeaderData from './headerData';
import printHourlySlider from './hourlySlider/hourlySlider';
import printWeatherSlider from './weatherSlider/weatherSlider';

const location = 'Málaga';
let lastWeatherData;
let usingFahrenheit = false;
/**
 * Print all the weather app
 * Slides the weather app in and out
 */
async function printWeatherApp() {
  const weatherData = await getWeatherData(location); // Get weather data
  if (weatherData.error) { // If there is an error, print it and return
    console.log(weatherData.error);
    return;
  }
  lastWeatherData = weatherData; // Save the last weather data
  updateWeatherApp(weatherData); // Update the weather app
}

/**
 * Update the all the weather app
 * Header data, weather slider and hourly slider
 * @param {Object} weatherData
 */
function updateWeatherApp(weatherData) {
  lastWeatherData = weatherData; // Save the last weather data
  const currentDayData = weatherData.forecast.forecastday[0]; // Get current day
  printHeaderData(weatherData.location); // Print header data
  printWeatherSlider(currentDayData.day); // Print weather slider
  printHourlySlider(currentDayData); // Print hourly slider
  updateUnits(usingFahrenheit ? 'F' : '°C'); // Update units
};

/**
 * Change the temperature units of the all the weather app
 * @param {boolean} boolean
 */
function setFahrenheit(boolean) {
  usingFahrenheit = boolean;
  updateWeatherApp(lastWeatherData);
}

/**
 * Update all the units of the weather app
 * @param {String} units
 */
function updateUnits(units = '°C') {
  const unitsElements = document.querySelectorAll('.weather__temp__unit');
  unitsElements.forEach((element) => {
    element.innerHTML = units;
  });
}

export {printWeatherApp, updateWeatherApp, lastWeatherData, usingFahrenheit, setFahrenheit};
