/*
In our first looping task we want you to start by creating a simple loop
that goes through all the items in the provided myArray and prints them out on the screen
inside list items (i.e., <li> elements), which are appended to the provided list.
 */
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