import './css/global.css';
import createHome from "./pages/home";
import loadPage from './pages/loadPage';


init();

function init() {
    loadPage();
    createHome();
}