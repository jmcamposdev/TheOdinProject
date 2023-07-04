import createBanner from '../modules/Home/banner/banner.js';
import createHeader from '../modules/Home/header/header.js';
import createWhatWeDo from '../modules/Home/whatWeDo/whatWeDo.js';
import {createCoffeeCulture, animateLetters} from '../modules/Home/coffeeCulture/coffeeCulture.js';
import createAroma from '../modules/Home/aroma/aroma.js';
import scrollToTop from '../assets/scrollToTop.js';
import createFooter from '../modules/Home/footer/footer.js';

function createHome() {
    const root = document.querySelector('#root');
    root.appendChild(scrollToTop())  
    root.appendChild(createHeader()); 
    root.appendChild(createBanner());
    root.appendChild(createWhatWeDo());
    root.appendChild(createCoffeeCulture());
    animateLetters();
    root.appendChild(createAroma());
    root.appendChild(createFooter());
}

export default createHome;