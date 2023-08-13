import {usingFahrenheit, setFahrenheit} from '../weatherApp';

/**
 * Adds event listeners to the fahrenheit checkbox
 */
function createFahrenheitEventListeners() {
  const fahrenheitButton = document.querySelector('.fahrenheit__checkbox');
  fahrenheitButton.addEventListener('click', () => {
    setFahrenheit(!usingFahrenheit);
  });
}

export default createFahrenheitEventListeners;
