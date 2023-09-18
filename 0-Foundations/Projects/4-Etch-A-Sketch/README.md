# Etch-A-Sketch Project
In this project, I have created a browser-based application that simulates an Etch-A-Sketch, 
allowing users to draw and interact with a 16x16 grid of square divs.
This project serves as a practical exercise in DOM (Document Object Model) manipulation, JavaScript event handling, and CSS styling.
You can see page [here](https://jmcamposdev.github.io/TheOdinProject/0-Foundations/Projects/4-Etch-A-Sketch/)

![ezgif com-video-to-gif-2](https://github.com/jmcamposdev/TheOdinProject/assets/108521775/9f9ad6f7-a1e5-41cc-86ae-3dc32ed2220d)






## Project Description

The Etch-A-Sketch project is designed to challenge your skills in web development. It combines JavaScript, HTML, and CSS to create an interactive drawing tool. Here's what the project entails:

1. Grid Creation: A webpage with a 16x16 grid of square divs is generated dynamically using JavaScript. This means the grid squares are not manually coded in the HTML file but are created and inserted into the DOM using JavaScript.
2. Grid Styling: The grid squares are organized in a grid layout. Flexbox, a CSS layout model, is employed to ensure that the squares are displayed in a grid format. Care is taken with borders and margins to maintain the size and alignment of the squares.
3. Hover Effect: When the mouse cursor passes over a grid square, it changes color, leaving a pixelated trail behind. This behavior is achieved by adding event listeners to the grid squares for the mouseenter and mouseleave events. JavaScript is used to alter the square's background color during these events.
4. User Interaction: A button is provided at the top of the screen. When clicked, it prompts the user to enter the number of squares per side for the new grid. The existing grid is removed, and a new grid is generated with the specified dimensions. The user input is limited to a maximum of 100 squares to prevent performance issues.

## Knowledge Acquired

During the completion of this project, I have acquired several key skills and knowledge in web development:

1. DOM Manipulation: I have learned how to create, modify, and delete HTML elements in the Document Object Model (DOM) using JavaScript. This is essential for dynamic web applications.
2. Event Handling: I have gained experience in handling mouse events (mouseenter and mouseleave) to create interactive features like the hover effect. Event listeners are used to trigger JavaScript functions in response to user actions.
3. CSS Styling: I have practiced CSS styling techniques, including the use of flexbox to create a grid layout, adjusting borders and margins, and changing background colors dynamically.
4. User Input Handling: I have learned how to prompt users for input and process their responses in JavaScript. The user input is used to customize the grid size.
5. GitHub Version Control: I have used Git and GitHub to set up a version control system for the project, enabling me to track changes and collaborate on code.

## Try It Out

To experience the Etch-A-Sketch project, you can access it via the following link: [Etch-A-Sketch Web App](https://jmcamposdev.github.io/TheOdinProject/0-Foundations/Projects/4-Etch-A-Sketch/)

Have fun drawing and exploring the interactive features of the Etch-A-Sketch!
