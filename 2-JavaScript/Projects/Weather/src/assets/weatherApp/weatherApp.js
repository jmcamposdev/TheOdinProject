import getWeatherData from '../apiCalls/apiCalls';
import printHeaderData from './headerData';
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

  const currentDayData = weatherData.forecast.forecastday[0]; // Get current day
  // If there is no error, print the weather app
  printHeaderData(weatherData.location); // Print header data
  printWeatherSlider(currentDayData.day); // Print weather slider
}

export default printWeatherApp;
