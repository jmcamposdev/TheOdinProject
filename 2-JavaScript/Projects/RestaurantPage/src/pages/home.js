import createBanner from '../modules/Home/banner/banner.js';
import createHeader from '../modules/Home/header/header.js';
import createWhatWeDo from '../modules/Home/whatWeDo/whatWeDo.js';
import {createCoffeeCulture, animateLetters} from '../modules/Home/coffeeCulture/coffeeCulture.js';

function createHome() {
    const root = document.querySelector('#root');
    root.appendChild(createHeader());
    root.appendChild(createBanner());
    root.appendChild(createWhatWeDo());
    root.appendChild(createCoffeeCulture());
    animateLetters();
}

export default createHome;