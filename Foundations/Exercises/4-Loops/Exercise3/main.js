const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

for (let string of myArray) {
    const item = document.createElement('li');
    item.textContent = string;
    list.appendChild(item);
}

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(list);