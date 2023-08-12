import './css/global.css';
import './css/header.css';
import getWeatherData from './assets/apiCalls/apiCalls';


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
