import './css/global.css';
import createHome from "./pages/home";
import loadPage from './pages/loadPage';
import createProducts from './pages/products';

function addNavEvents ()  {
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');

    homeBtn.addEventListener('click', createHome);
    menuBtn.addEventListener('click', createProducts);
}

init();

function init() {
    loadPage();
    createHome();
    addNavEvents();
}

function clearMain() {
    const main = document.querySelector('#main');
    main.textContent = '';
}

function addMain(element) {
    const main = document.querySelector('#main');
    main.appendChild(element);
};

export {clearMain, addMain};