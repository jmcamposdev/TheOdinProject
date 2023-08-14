import {currentDayIndex, lastWeatherData, setCurrentDayIndex, updateWeatherApp} from '../weatherApp';

/**
 * Add the event listener to the next arrow
 * Pass to the next day if is the last go to the first
 */
function createNextArrowEvent() {
  const nextArrow = document.querySelector('.next__arrow');
  nextArrow.addEventListener('click', () => {
    const weatherDataForeCast = lastWeatherData.forecast.forecastday;
    const nextDayIndex = currentDayIndex + 1 >= weatherDataForeCast.length ? 0 : currentDayIndex + 1;
    setCurrentDayIndex(nextDayIndex);
    updateWeatherApp();
  });
}

/**
 * Add the event listener to the prev arrow
 * Pass to the next day if is the last go to the first
 */
function createPrevArrowEvent() {
  const nextArrow = document.querySelector('.prev__arrow');
  nextArrow.addEventListener('click', () => {
    const weatherDataForeCast = lastWeatherData.forecast.forecastday;
    const nextDayIndex = currentDayIndex - 1 < 0 ? weatherDataForeCast.length-1 : currentDayIndex - 1;
    setCurrentDayIndex(nextDayIndex);
    updateWeatherApp();
  });
}

export {createNextArrowEvent, createPrevArrowEvent};
