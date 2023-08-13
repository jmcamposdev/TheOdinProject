import getWeatherData from '../apiCalls/apiCalls';
import printHeaderData from './headerData';
import printHourlySlider from './hourlySlider/hourlySlider';
import printWeatherSlider from './weatherSlider/weatherSlider';

const location = 'Málaga';
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

  updateWeatherApp(weatherData); // Update the weather app
}

/**
 * Update the all the weather app
 * Header data, weather slider and hourly slider
 * @param {Object} weatherData
 */
function updateWeatherApp(weatherData) {
  const currentDayData = weatherData.forecast.forecastday[0]; // Get current day
  printHeaderData(weatherData.location); // Print header data
  printWeatherSlider(currentDayData.day); // Print weather slider
  printHourlySlider(currentDayData); // Print hourly slider
};

export {printWeatherApp, updateWeatherApp};
