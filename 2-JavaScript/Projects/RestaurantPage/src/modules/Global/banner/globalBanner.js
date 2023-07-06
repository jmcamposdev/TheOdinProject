import '../../../css/global-banner.css';


const subTitle = "Welcome to our Coffeeshop"
const title = "Where Coffee Meets Hospitality"
export default function createBanner() {
    const banner = document.createElement('section');
    banner.classList.add('banner');
    banner.style.backgroundImage = "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')";


    const bannerText = document.createElement('div');
    bannerText.classList.add('banner__text');

    const bannerSubtitle = document.createElement('h2');
    bannerSubtitle.classList.add('banner__subtitle');
    bannerSubtitle.textContent = subTitle;

    const bannerTitle = document.createElement('h1');
    bannerTitle.classList.add('banner__title');
    bannerTitle.textContent = title;

    bannerText.appendChild(bannerSubtitle);
    bannerText.appendChild(bannerTitle);
    

    banner.appendChild(bannerText);

    return banner; 
}