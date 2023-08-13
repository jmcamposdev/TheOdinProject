import './css/global.css';
import './css/header.css';
import './css/loading.css';
import './css/slider.css';
import './css/hourlySlider.css';
import './css/search.css';
import printWeatherApp from './assets/weatherApp/weatherApp';
import loadingSvg from './img/loading.svg';


/**
 * @description This is the main function of the application
 * @return {void}
 */
async function init() {
  setLoadingImg();
  printWeatherApp();
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
