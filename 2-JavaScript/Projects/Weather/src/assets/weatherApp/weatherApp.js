import getWeatherData from '../apiCalls/apiCalls';
import printHeaderData from './headerData';

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

  // If there is no error, print the weather app
  printHeaderData(weatherData.location); // Print header data
}

export default printWeatherApp;
