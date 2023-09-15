import {getDay} from '../utils/utilities';

/**
 * Print in the Header the Date and the City
 * @param {string} city - City Name
 * @param {Date} date - Date
 */
function printHeaderData(city, date) {
  // Getting DOM Elements
  const nameCityElement = document.querySelector('.header__city__name__city');
  const textDayElement =
  document.querySelector('.header__city__name__date__textDay');
  const numberDayElement =
  document.querySelector('.header__city__name__date__numberDay');
  const monthElement =
  document.querySelector('.header__city__name__date__textMonth');
  // Setting the content
  nameCityElement.textContent = city; // City Name
  textDayElement.textContent = getDay(date); // Day of the Week
  numberDayElement.textContent = date.getDate(); // Day of the Month
  monthElement.textContent = date.toLocaleString('en-us', {month: 'long'}); // Month
}

export default printHeaderData;
