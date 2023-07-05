import createBanner from '../modules/Home/banner/banner.js';
import createWhatWeDo from '../modules/Home/whatWeDo/whatWeDo.js';
import {createCoffeeCulture, animateLetters} from '../modules/Home/coffeeCulture/coffeeCulture.js';
import createAroma from '../modules/Home/aroma/aroma.js';

function createHome() {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createBanner());
    main.appendChild(createWhatWeDo());
    main.appendChild(createCoffeeCulture());
    animateLetters();
    main.appendChild(createAroma());
}

export default createHome;