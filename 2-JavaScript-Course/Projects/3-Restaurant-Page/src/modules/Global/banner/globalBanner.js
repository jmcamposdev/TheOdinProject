import '../../../css/home-banner.css';
import '../../../css/global-banner.css';

export default function createBanner(title, subTitle, bgImage) {
    const banner = document.createElement('section');
    banner.classList.add('banner');
    banner.style.backgroundImage = `url(${bgImage})`;

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