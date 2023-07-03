import './css/global.css';
import createHome from "./pages/home";

const root = document.querySelector('#root');

init();

function init() {
    createHome();
}