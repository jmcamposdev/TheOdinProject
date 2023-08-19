import getWeatherData from '../../apiCalls/apiCalls';

import {setLastWeatherData, updateWeatherApp} from '../weatherApp';

/**
 * Create the Search Box Submit Event
 * @return {void}
 */
function createSearchEvent() {
  createShowSearchBox();

  const searchForm = document.querySelector('.search__form');
  const searchInput = document.querySelector('.search__form__input');

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    const searchQuery = searchInput.value; // Get the search query
    const weatherData = await getWeatherData(searchQuery); // Get the weather data
    searchInput.value = ''; // Clear the search input

    // If there is an error, display it and return
    if (weatherData.error) {
      const error = document.querySelector('.search__error');
      error.textContent = 'City not found';
      error.classList.remove('search__error--inactive');

      setTimeout(() => {
        error.classList.add('search__error--inactive');
      }, 1000);
      return;
    }

    // If there is no error, print the weather app
    setLastWeatherData(weatherData);
    updateWeatherApp();
  });
}

/**
 * Add the event to show the search box when the search icon is clicked
 */
function createShowSearchBox() {
  const searchIcon = document.querySelector('.header__search .search-icon');
  const searchContainer = document.querySelector('.search__container');

  searchIcon.addEventListener('click', () => {
    searchContainer.classList.add('search__container--active');
  });
}

export default createSearchEvent;
