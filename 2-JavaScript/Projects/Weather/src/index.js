import getWeatherData from './assets/apiCalls/apiCalls';
import './style.css'; // Importing CSS Styles

/**
 * @description This is the main function of the application
 * @return {void}
 */
async function init() {
  // Getting the default weather data
  const defaultWeatherData = await getWeatherData('Malaga');
  console.log(defaultWeatherData);
}

init(); // Calling the main function
