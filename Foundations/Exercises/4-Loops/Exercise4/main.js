/*
In this next task, we want you to write a simple program that, given a name,
searches an array of objects containing names and phone numbers (phonebook) and,
if it finds the name, outputs the name and phone number into the paragraph (para)
and then exits the loop before it has run its course.
 */
const name = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
        para.textContent = name + " - " + phonebook[i].number;
        break;
    }
}

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);