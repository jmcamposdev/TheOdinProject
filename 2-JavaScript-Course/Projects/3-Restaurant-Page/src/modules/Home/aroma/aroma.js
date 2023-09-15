import '../../../css/aroma.css';

const titleContent = "Aroma";
const subTitleContent = "Our Coffee";

const coffeeItems = [
    {
        name: "Iced caramel macchiato",
        type: "Coffee",
        link: "#"
    },
    {
        name: "Creamy hazelnut mocha",
        type: "Coffee",
        link: "#"
    },
    {
        name: "Sweet vanilla latte",
        type: "Coffee",
        link: "#"
    },
    {
        name: "Irish cream coffee",
        type: "Coffee",
        link: "#"
    },
]

export default function createAroma()  {
    const aroma = document.createElement('section');
    aroma.classList.add('aroma');

    const aromaContainer = document.createElement('div');
    aromaContainer.classList.add('container');

    const title = document.createElement('h2');
    title.classList.add('aroma__title');
    title.textContent = titleContent;

    const subTitle = document.createElement('h3');
    subTitle.classList.add('aroma__subtitle');
    subTitle.textContent = subTitleContent;

    const coffeeContainer = document.createElement('div');
    coffeeContainer.classList.add('aroma__coffeeContainer');

    coffeeItems.forEach(item => {
        const coffeeItem = document.createElement('div');
        coffeeItem.classList.add('aroma__coffeeItem');

        const coffeeModal = document.createElement('div');
        coffeeModal.classList.add('aroma__coffeeModal');

        const coffeeName = document.createElement('a');
        coffeeName.classList.add('aroma__coffeeName');
        coffeeName.textContent = item.name;
        coffeeName.setAttribute('href', item.link);

        const coffeeType = document.createElement('p');
        coffeeType.classList.add('aroma__coffeeType');
        coffeeType.textContent = item.type;

        coffeeModal.appendChild(coffeeName);
        coffeeModal.appendChild(coffeeType);

        coffeeItem.appendChild(coffeeModal);

        coffeeContainer.appendChild(coffeeItem);
    });

    aromaContainer.appendChild(title);
    aromaContainer.appendChild(subTitle);
    aromaContainer.appendChild(coffeeContainer);

    aroma.appendChild(aromaContainer);

    return aroma;
};