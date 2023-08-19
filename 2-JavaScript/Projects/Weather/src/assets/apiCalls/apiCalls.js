import setLoading from '../utils/setLoading';
/**
 * Return the weather for the given location
 * Use the weatherapi.com API
 * @see https://www.weatherapi.com/docs/
 * @see https://www.weatherapi.com/api-explorer.aspx
 * @param {string} location
 * return {object} weather
 */
async function getWeatherData(location) {
  setLoading(true);
  /* eslint max-len: ["error", { "ignoreUrls": true }] */
  const response = await
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API}&q=${location}&days=3&aqi=yes&alerts=no`, {mode: 'cors'})
      .catch((error) => {
        return error;
      });

  const data = await response.json();
  setLoading(false);
  return data;
}

/**
 * Return the possible locations for the given location or word
 * @param {String} location
 * @return {Object} data
 */
async function getWeatherAutocomplete(location) {
  const response = await
  fetch(`https://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API}&q=${location}`, {mode: 'cors'})
      .catch((error) => {
        return error;
      });

  const data = await response.json();
  return data;
}

export {getWeatherData, getWeatherAutocomplete};
