import './css/global.css';
import './css/header.css';
import './css/loading.css';
import './css/slider.css';
import './css/hourlySlider.css';
import './css/search.css';
import {printWeatherApp} from './assets/weatherApp/weatherApp';
import loadingSvg from './img/loading.svg';
import createSearchEvent from './assets/weatherApp/searchBox/searchBox';
import createFahrenheitEventListeners from './assets/weatherApp/fahrenheitCheck/fahrenheitCheck';
import {createNextArrowEvent, createPrevArrowEvent} from './assets/weatherApp/weatherSlider/sliderArrows';


/**
 * @description This is the main function of the application
 * @return {void}
 */
async function init() {
  setLoadingImg();
  printWeatherApp();
  createSearchEvent();
  createFahrenheitEventListeners();
  createNextArrowEvent();
  createPrevArrowEvent();
}

/**
 * Add the loading image to the DOM
 */
function setLoadingImg() {
  const loadingContainer = document.querySelector('.loading');
  const loadingImg = document.createElement('img');
  loadingImg.src = loadingSvg;
  loadingImg.alt = 'Loading...';
  loadingContainer.appendChild(loadingImg);
}

init(); // Calling the main function
