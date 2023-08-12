/**
 * Return the weather for the given location
 * @param {string} location
 * return {object} weather
 */
export default async function getWeatherData(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API}&q=${location}&days=3&aqi=yes&alerts=no`);
  const data = await response.json();
  return data;
}
