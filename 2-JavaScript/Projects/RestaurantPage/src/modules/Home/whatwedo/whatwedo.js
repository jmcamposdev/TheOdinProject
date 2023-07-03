import '../../../css/whatWeDo.css';
import leftImgUrl from '../../../img/left-person.jpg';
import rightImgUrl from '../../../img/right-person.jpg';
import rotatingImgUrl from '../../../img/rotated-img.png';

const whatWeDoSubtitleText = "What we do";
const whatWeDoTitleText = "Coffee culture at its finest: elevating your coffee game";
const textParagraph = "Discover the essence of our coffee shop in California, where coffee comes alive with a story of motivation and achievement. From humble beginnings to becoming a haven for dreamers and coffee lovers, our journey is full of exciting moments. Join us and be inspired."
const linkText = "About us";
const linkUrl = "#";

export default function createwhatWeDo() {
    const whatWeDo = document.createElement('section');
    whatWeDo.classList.add('whatWeDo');

    const container = document.createElement('div');
    container.classList.add('container');

    // Left container
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('whatWeDo__left');

    // Left container Subtitle
    const whatWeDoSubtitle = document.createElement('h3');
    whatWeDoSubtitle.classList.add('whatWeDo__subtitle');
    whatWeDoSubtitle.textContent = whatWeDoSubtitleText;

    // Left container Title
    const whatWeDoTitle = document.createElement('h2');
    whatWeDoTitle.classList.add('whatWeDo__title');
    whatWeDoTitle.textContent = whatWeDoTitleText;

    // Left container Image
    const leftImg = document.createElement('img');
    leftImg.classList.add('whatWeDo__left__img');
    leftImg.setAttribute('src', leftImgUrl);

    const rotatingImg = document.createElement('img');
    rotatingImg.classList.add('whatWeDo__left__img--rotating');
    rotatingImg.setAttribute('src', rotatingImgUrl);

    // Right container
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('whatWeDo__right');

    // Right container Image
    const rightImg = document.createElement('img');
    rightImg.classList.add('whatWeDo__right__img');
    rightImg.setAttribute('src', rightImgUrl);

    // Right container Content
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('whatWeDo__content');

    // Right container Content Text
    const whatWeDoText = document.createElement('p');
    whatWeDoText.classList.add('whatWeDo__text');
    whatWeDoText.textContent = textParagraph;

    // Right container Content Link
    const whatWeDoLink = document.createElement('a');
    whatWeDoLink.classList.add('whatWeDo__btn');
    whatWeDoLink.textContent = "About us";
    whatWeDoLink.setAttribute('href', linkUrl);

    // Append
    whatWeDo.appendChild(container);

    container.appendChild(leftContainer);
    container.appendChild(rightContainer);

    leftContainer.appendChild(whatWeDoSubtitle);
    leftContainer.appendChild(whatWeDoTitle);
    leftContainer.appendChild(leftImg);
    leftContainer.appendChild(rotatingImg);

    contentContainer.appendChild(whatWeDoText);
    contentContainer.appendChild(whatWeDoLink);

    rightContainer.appendChild(rightImg);
    rightContainer.appendChild(contentContainer);
    

    return whatWeDo;
}
