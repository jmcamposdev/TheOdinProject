/*
In this exercise, we want you to take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

Specifically, we want you to:

Write a loop that will iterate through the people array.
During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.
 */

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

for (let person of people) {
    if (person === "Phil" || person === "Lola") {
        refused.textContent += person + ", ";
    } else {
        admitted.textContent += person + ", ";
    }
}

// For remove the last coma
admitted.textContent = admitted.textContent.substring(0,admitted.textContent.length-2);
refused.textContent = refused.textContent.substring(0,refused.textContent.length-2);