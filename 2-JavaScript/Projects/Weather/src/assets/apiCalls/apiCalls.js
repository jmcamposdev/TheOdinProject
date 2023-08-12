/**
 * Return the weather for the given location
 * Use the weatherapi.com API
 * @see https://www.weatherapi.com/docs/
 * @see https://www.weatherapi.com/api-explorer.aspx
 * @param {string} location
 * return {object} weather
 */
export default async function getWeatherData(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API}&q=${location}&days=3&aqi=yes&alerts=no`);
  const data = await response.json();
  return data;
}
