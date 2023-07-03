import '../../../css/coffeeCulture.css';


const titleContent = "Coffee Culture";
const subTitleContent = "Crafting the perfect cup of coffee: <br> meticulous "
const lettersContent = ["roasting", "brewing", "serving", "enjoying", "pouring"]
const textContent = "Improve your life with coffee";

function createCoffeeCulture() {
    const coffeeCulture = document.createElement('section');
    coffeeCulture.classList.add('coffeeCulture');

    const title = document.createElement('h2');
    title.classList.add('coffeeCulture__title');
    title.textContent = titleContent;

    const subTitle = document.createElement('h3');
    subTitle.classList.add('coffeeCulture__subtitle');
    subTitle.innerHTML = subTitleContent;

    const letters = document.createElement('span');
    letters.classList.add('coffeeCulture__letters');
    letters.textContent = lettersContent[0];

    const blinkingCursor = document.createElement('span');
    blinkingCursor.classList.add('coffeeCulture__blinkingCursor');
    blinkingCursor.textContent = "_";

    const text = document.createElement('p');
    text.classList.add('coffeeCulture__text');
    text.textContent = textContent;

    coffeeCulture.appendChild(title);
    coffeeCulture.appendChild(subTitle);
    subTitle.appendChild(letters);
    subTitle.appendChild(blinkingCursor);
    coffeeCulture.appendChild(text);
    
    return coffeeCulture;
}

function animateLetters() {
    const letters = document.querySelector(".coffeeCulture__letters");
    let i = 1;
    setInterval(() => {
        const words = lettersContent[i].split(""); // Split each word into an array of letters
        
        // Remove each letter with a delay
        for (let j = 0; j < letters.textContent.length; j++) { 
            setTimeout(() => {
                    letters.textContent = letters.textContent.slice(0, -1);
            }, 75 * (words.length - j));
        }

        i == lettersContent.length - 1 ? i = 0 : i++; // Reset i to 0 if it reaches the end of the array

        // Write the next word after removing the previous one
        setTimeout(() => { 
            words.forEach((letter, index) => { // Write each letter with a delay
                setTimeout(() => {
                    letters.textContent += letter;
                }, 100 * index);
            });
        }, 1500);

        
    }, (200 * lettersContent.length + 1500) + 300); // Wait for the previous word to be written before starting the next one
}

export { createCoffeeCulture, animateLetters };

