import createHomeBanner from '../modules/Home/banner/banner.js';
import createWhatWeDo from '../modules/Home/whatWeDo/whatWeDo.js';
import {createCoffeeCulture, animateLetters} from '../modules/Home/coffeeCulture/coffeeCulture.js';
import createAroma from '../modules/Home/aroma/aroma.js';
import {clearMain, addMain} from '../index.js';

function createHome() {
    clearMain();
    addMain(createHomeBanner()); // Add banner
    addMain(createWhatWeDo()); // Add what we do section

    addMain(createCoffeeCulture()); // Add coffee culture section
    animateLetters(); // Animate letters for coffee culture section

    addMain(createAroma()); // Add aroma section
}

export default createHome;