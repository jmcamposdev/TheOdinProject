import {usingFahrenheit} from '../weatherApp';

// Import all the weather icons
import sunnyImg from './img/sunny.png';
import partlyCloudyDayImg from './img/partly-cloudy-day.png';
import cloudyImg from './img/cloudy.png';
import overcastImg from './img/overcast.png';
import mistImg from './img/mist.png';
import rainImg from './img/rain.png';
import snowImg from './img/snow.png';
import sleetImg from './img/sleet.png';
import thunderstormImg from './img/thunderstorm.png';
import windImg from './img/wind.png';

/**
 * Print the weather slider
 * You can scroll through all the slides of the days
 * @param {Object} day
 */
function printWeatherSlider(day) {
  const weatherIconDay = document.querySelector('.weather__slider__information__img');
  const weatherTitleDay = document.querySelector('.weather__slider__information__title');
  const windValueDay = document.querySelector('.wind__value__data');
  const tempValueDay = document.querySelector('.temp__data__value');
  const humidityValueDay = document.querySelector('.humidity__data__value');

  weatherIconDay.src = getWeatherIcon(day.condition.code);
  weatherTitleDay.innerHTML = day.condition.text;
  windValueDay.textContent = day.avgvis_km;
  tempValueDay.textContent = usingFahrenheit ? Math.round(day.avgtemp_f) : Math.round(day.avgtemp_c);
  humidityValueDay.textContent = day.avghumidity;
}

/**
 * Convert the code of the weather to the icon
 * @param {Number} code
 * @return {String} icon
 */
function getWeatherIcon(code) {
  let img;
  if (code == 1000) {
    img = sunnyImg;
  } else if (code == 1003) {
    img = partlyCloudyDayImg;
  } else if (code == 1006) {
    img = cloudyImg;
  } else if (code == 1009) {
    img = overcastImg;
  } else if (code == 1030 || code == 1135 || code == 1147) { // All the mist codes
    img = mistImg;
  } else if (code == 1063 ||
    code == 1072 ||
    code == 1150 ||
    code == 1153 ||
    code == 1180 ||
    code == 1183 ||
    code == 1186 ||
    code == 1189 ||
    code == 1192 ||
    code == 1195 ||
    code == 1240 ||
    code == 1243 ||
    code == 1246) { // All the rain codes
    img = rainImg;
  } else if (code == 1066 ||
    code == 1210 ||
    code == 1213 ||
    code == 1216 ||
    code == 1219 ||
    code == 1222 ||
    code == 1225 ||
    code == 1237 ||
    code == 1255 ||
    code == 1258 ||
    code == 1261 ||
    code == 1264) { // All the snow codes
    img = snowImg;
  } else if (code == 1069 ||
    code == 1114 ||
    code == 1168 ||
    code == 1171 ||
    code == 1198 ||
    code == 1201 ||
    code == 1204 ||
    code == 1207 ||
    code == 1249 ||
    code == 1252) { // All the sleet codes
    img = sleetImg;
  } else if (code == 1087 ||
    code == 1273 ||
    code == 1276 ||
    code == 1279 ||
    code == 1282) { // All the thunderstorm codes
    img = thunderstormImg;
  } else if (code == 1117) { // All the wind codes
    img = windImg;
  }
  return img;
}

export {printWeatherSlider, getWeatherIcon};
