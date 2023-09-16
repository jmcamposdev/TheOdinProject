import {getWeatherAutocomplete, getWeatherData} from '../../apiCalls/apiCalls';

import {setLastWeatherData, updateWeatherApp} from '../weatherApp';

/**
 * Create the Search Box Submit Event
 * @return {void}
 */
function createSearchEvent() {
  createShowSearchBoxEvent(); // Create the event to show the search box
  createCloseSearchBoxEvent(); // Create the event to close the search box
  createAutoCompleteEvent(); // Create the event to autocomplete the search box

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

    loadSearchedData(weatherData); // Load the searched data
  });
}

/**
 * Close the search Box, set the last weather data from the given prop and update the weather app
 * @param {Object} weatherData
 */
function loadSearchedData(weatherData) {
  setLastWeatherData(weatherData); // Set the last weather data
  updateWeatherApp(); // Update the weather app
  closeSearchBox(); // Hide the search box
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

/**
 * Create the event to autocomplete the search box
 * With each key pressed, the search box will be autocompleted
 */
function createAutoCompleteEvent() {
  const searchInput = document.querySelector('.search__form__input');
  const searchAutocompleteContainer = document.querySelector('.search__results__list');

  searchInput.addEventListener('keyup', async () => {
    const searchQuery = searchInput.value; // Get the search query
    // If the search query is less than 3 characters, clear the autocomplete list and return
    if (searchQuery.length < 3) {
      clearAutocompleteList();
      return;
    };

    const weatherData = await getWeatherAutocomplete(searchQuery); // Get the weather data

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

    // Remove the same cities from the list
    const filteredCities = weatherData.filter((value, index) => {
      return index === weatherData.findIndex((city) => {
        return city.name === value.name;
      });
    });

    // If there is no error, print the autocomplete list
    clearAutocompleteList(); // Clear the autocomplete list
    filteredCities.forEach((city) => { // Print the autocomplete list
      searchAutocompleteContainer.appendChild(createAutocompleteElement(city));
    });
  });
}

/**
 * Create the autocomplete element
 * @param {String} city
 * @return {HTMLElement}
 */
function createAutocompleteElement(city) {
  // Create the element
  const autocompleteElement = document.createElement('li');
  autocompleteElement.classList.add('search__results__list__element');

  // Add the city name and country to the element
  autocompleteElement.textContent = city.name + ', ' + city.country;

  // Add the event to load the searched data when the element is clicked
  autocompleteElement.addEventListener('click', async () => {
    const weatherData = await getWeatherData(city.name); // Get the weather data
    loadSearchedData(weatherData); // Load the searched data
  });

  return autocompleteElement;
}

/**
 * Clear the autocomplete list
 * Remove all the autocomplete elements
 */
function clearAutocompleteList() {
  const searchAutocompleteContainer = document.querySelector('.search__results__list');
  searchAutocompleteContainer.innerHTML = '';
}


export default createSearchEvent;
