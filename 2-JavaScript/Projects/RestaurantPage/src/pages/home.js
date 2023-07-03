import createHeader from '../modules/Home/header/header.js';

function createHome() {
    const root = document.querySelector('#root');
    root.appendChild(createHeader());
}

export default createHome;