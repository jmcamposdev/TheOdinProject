import scrollToTop from "../assets/scrollToTop";
import createFooter from "../modules/Global/footer/footer";
import createHeader from "../modules/Global/header/header";

export default function loadPage() {
    const root = document.querySelector('#root');

    root.appendChild(createHeader()); // Header that is static for all pages
    
    // Main that will change depending on the page the user is on
    const main = document.createElement('main'); 
    main.setAttribute('id', 'main');
    main.appendChild(scrollToTop()); // Scroll to top button that will be hidden until the user scrolls down
    root.appendChild(main);

    root.appendChild(createFooter()); // Footer that is static for all pages
}