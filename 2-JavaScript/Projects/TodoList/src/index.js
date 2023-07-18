import createHeader from "./modules/Header/Header";
import { addRoot } from "./modules/Root/DOMRoot";

function init () {
    addRoot(createHeader());
}

init();