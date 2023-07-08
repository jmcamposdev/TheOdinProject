import '../../../css/scrollToTop.css';
import topRowSvg from '../../../img/icons/topRow.svg';

export default function scrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.classList.add('scrollBtn', 'scrollBtn--inactive');
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.setAttribute('aria-hidden', 'true');
    scrollBtn.setAttribute('tabindex', '-1');
    scrollBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" color="#fff"><path d="M450-80v-686L242-558l-42-42 280-280 280 280-42 42-208-208v686h-60Z"/></svg>`;
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollBtn.classList.add('scrollBtn--active');
            scrollBtn.classList.remove('scrollBtn--inactive');
            scrollBtn.setAttribute('aria-hidden', 'false');
        } else {
            scrollBtn.classList.add('scrollBtn--inactive');
            scrollBtn.classList.remove('scrollBtn--active');
        }

        scrollBtn.addEventListener("animationend", () => {
            const ariaStatus = scrollBtn.getAttribute('aria-hidden');
            scrollBtn.setAttribute('aria-hidden', !ariaStatus);
        });
    });

    return scrollBtn;
}