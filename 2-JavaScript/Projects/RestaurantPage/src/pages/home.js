import createBanner from '../modules/Home/banner/banner.js';
import createHeader from '../modules/Home/header/header.js';
import createWhatWeDo from '../modules/Home/whatwedo/whatwedo.js';

function createHome() {
    const root = document.querySelector('#root');
    root.appendChild(createHeader());
    root.appendChild(createBanner());
    root.appendChild(createWhatWeDo());
}

export default createHome;