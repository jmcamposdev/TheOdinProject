/**
 * Print in the Header the Date and the City
 * @param {Object} location
 */
function printHeaderData(location) {
  // Getting DOM Elements
  const nameCityElement = document.querySelector('.header__city__name__city');
  const textDayElement =
  document.querySelector('.header__city__name__date__textDay');
  const numberDayElement =
  document.querySelector('.header__city__name__date__numberDay');
  const monthElement =
  document.querySelector('.header__city__name__date__textMonth');
  // Setting the content
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(location.localtime);

  nameCityElement.textContent = location.name; // City Name
  textDayElement.textContent = days[date.getDay()]; // Day of the Week
  numberDayElement.textContent = date.getDate(); // Day of the Month
  monthElement.textContent = date.toLocaleString('en-us', {month: 'long'}); // Month
}

export default printHeaderData;
