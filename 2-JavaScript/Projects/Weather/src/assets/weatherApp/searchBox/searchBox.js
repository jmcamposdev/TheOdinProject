import getWeatherData from '../../apiCalls/apiCalls';

import {setLastWeatherData, updateWeatherApp} from '../weatherApp';

/**
 * Create the Search Box Submit Event
 * @return {void}
 */
function createSearchEvent() {
  createShowSearchBoxEvent(); // Create the event to show the search box
  createCloseSearchBoxEvent(); // Create the event to close the search box

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
    closeSearchBox(); // Hide the search box
    setLastWeatherData(weatherData); // Set the last weather data
    updateWeatherApp(); // Update the weather app
  });
}

/**
 * Add the event to show the search box when the search icon is clicked
 */
function createShowSearchBoxEvent() {
  const searchIcon = document.querySelector('.header__search .search-icon');
  const searchContainer = document.querySelector('.search__container');

  searchIcon.addEventListener('click', () => {
    searchContainer.classList.add('search__container--active');
  });
}

/**
 * Add the event to close icon in the top right corner of the search box
 * Hide the search box when the close icon is clicked
 */
function createCloseSearchBoxEvent() {
  const closeIcon = document.querySelector('.search__close__container .close-icon');
  const searchContainer = document.querySelector('.search__container');

  closeIcon.addEventListener('click', () => {
    searchContainer.classList.remove('search__container--active');
  });
}

/**
 * Hide the search box
 */
function closeSearchBox() {
  const searchContainer = document.querySelector('.search__container');
  searchContainer.classList.remove('search__container--active');
}


export default createSearchEvent;
