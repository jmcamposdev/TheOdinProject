import getWeatherData from '../apiCalls/apiCalls';
import printHeaderData from './headerData';

const location = 'Málaga';

/**
 * Shows or hides the loading spinner
 * @param {Boolean} isLoading
 */
function setLoading(isLoading) {
  const loading = document.querySelector('.loading');
  loading.classList.toggle('loading--active', isLoading);
}

/**
 * Print all the weather app
 * Slides the weather app in and out
 */
async function printWeatherApp() {
  setLoading(true);
  const weatherData = await getWeatherData(location);
  if (weatherData.error) {
    console.log(weatherData.error);
    return;
  }

  setLoading(false);
  printHeaderData(weatherData.location);
}

export default printWeatherApp;
