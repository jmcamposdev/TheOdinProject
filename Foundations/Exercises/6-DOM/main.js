const container = document.querySelector("#container");

// Add a <p> with red text that says “Hey I’m red!”
const redPara = document.createElement("p"); // Create the para
redPara.textContent = "Hey I'm red!"; // Insert the text
redPara.style.color = "red"; // Change the font color to red
container.appendChild(redPara); // Append the para to the container

// Add an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement("h3"); // Create the h3
blueH3.textContent = "I’m a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

// Add a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
// another <h1> that says “I’m in a div”
const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
div.appendChild(divH1);
// a <p> that says “ME TOO!”
const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";
div.appendChild(divPara);

container.appendChild(div); // Append the div to the container

// Create an event listener for the button
const btn = document.querySelector("#btn");
btn.addEventListener('click', (e) => {
    alert("Hello I am an alert box!")
})