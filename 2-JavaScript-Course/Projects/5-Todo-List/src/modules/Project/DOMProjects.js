import { closeHamburgerNav } from "../../assets/Hamburger/hamburgerNav.js";
import { removeInLocalStorageProject, saveInLocalStorageProject } from "../../assets/LocalStorage/localStorage.js";
import createHiddenPopup from "../../assets/Popups/hiddenPopup.js";
import DOMTodoList from "../../index.js"
const projectFormContainer = document.querySelector('.create-new-project-container');

/**
 *  Insert the project buttons in the DOM
 *  
 * @param {String} projectTitle 
 */
function printNewProject (projectTitle) {
    // Get the project buttons container
    const projectButtonContainer = document.querySelector('.projects-actions-list .actions-list');

    // Create the project button Container
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container'); // Add the class to the project container

    const projectButton = document.createElement('button'); // Create the project button
    projectButton.classList.add('project-button'); // Add the class to the project button
    projectButton.setAttribute('data-project-type', projectTitle.toLowerCase()); // Add the project title as data attribute

    const projectInformation = document.createElement('div'); // Create the project information container
    projectInformation.classList.add('project-information'); // Add the class to the project information container

    // Create the project icon
    const icon = `<span class="material-symbols-outlined">
                    workspaces
                </span>`

    // Insert the project title and icon in the project information container
    projectInformation.innerHTML = icon + projectTitle;


    const deleteIconContainer = document.createElement('div'); // Create the delete icon container
    deleteIconContainer.classList.add('delete-icon-container'); // Add the class to the delete icon container

    const deleteIcon = document.createElement('span');  // Create the delete icon
    deleteIcon.classList.add('project-delete-icon', "material-symbols-outlined"); // Add the class to the delete icon
    deleteIcon.textContent = 'delete'; // Add the text to the delete icon

    deleteIconContainer.appendChild(deleteIcon); // Insert the delete icon in the delete icon container

    projectButton.appendChild(projectInformation); // Insert the project information container in the project button

    projectContainer.appendChild(projectButton); // Insert the project button in the project container
    projectContainer.appendChild(deleteIconContainer); // Insert the delete icon container in the project container

    projectButtonContainer.appendChild(projectContainer); // Insert to the DOM the project container

    createDeleteProjectEvent(projectTitle, deleteIcon); // Create the delete project event
    createProjectsEvents(); // Create the project events
}

/**
 *  Add the active class to the selected project button
 *  Remove the active class from the other project buttons
 *  Print the tasks of the selected project
 */
function createProjectsEvents () {
    const projectsButtonsElements = document.querySelectorAll(".actions-list button"); // Get all the project buttons has NodeList
    const projectsButtonsArray = Array.from(projectsButtonsElements) // Convert the NodeList to Array
    // Add the click event to all the project buttons
    projectsButtonsArray.forEach(button => {
        button.addEventListener("click", () => selectProjectButtonActive(button.dataset.projectType))
    });
}

/**
 *  Create the delete project event
 *  Remove the project from the DOM and from the local storage
 *  Remove all the related tasks from the DOM and from the local storage
 * @param {String} projectName 
 * @param {HTMLSpanElement} projectDeleteButton 
 */
function createDeleteProjectEvent (projectName, projectDeleteButton) {
    projectDeleteButton.addEventListener('click', () => {
        DOMTodoList.removeProject(projectName.toLowerCase());
        removeInLocalStorageProject(projectName);
    });
}

function printAddProjectsElement () {
    const createProjectButton = document.createElement('button');
    createProjectButton.classList.add('create-project-button');
    createProjectButton.innerHTML = `
            <span class="material-symbols-outlined">add</span>
            <p class="task-title">New Project</p>`;
    
    projectFormContainer.appendChild(createProjectButton);
    createProjectsEvent(createProjectButton);
}

function createProjectsEvent(createProjectButton) {
    createProjectButton.addEventListener('click', () => {
        DOMTodoList.closeAllForms();
        projectFormContainer.innerHTML = '';
        projectFormContainer.appendChild(createNewProjectForm());
        createNewProjectSubmitEvent(projectFormContainer.querySelector('.new-project-form'));
        createNewProjectCloseEvent(projectFormContainer);
    });
}

function createNewProjectForm()  {
    const newProjectForm = document.createElement('form');
    newProjectForm.classList.add('new-project-form');
    newProjectForm.innerHTML = `
            <div class="form-inputs">
                <input type="text" class="new-task-title" placeholder="Project Name" required>
            </div>
            <div class="form-actions">
                <span class="close-new-task-form material-symbols-outlined">close</span>
                <button type="submit" class="new-task-submit"><span class="material-symbols-outlined">add</span></button>
            </div>`;
    return newProjectForm;
}

function createNewProjectCloseEvent (projectForm) {
    const closeEditTaskForm = projectForm.querySelector('.close-new-task-form');
    closeEditTaskForm.addEventListener('click', () => {
        closeNewProjectForm();
    });
}

function closeNewProjectForm () { 
    projectFormContainer.innerHTML = ''; // Clear the form
    printAddProjectsElement(); // Print the add project button
}



function createNewProjectSubmitEvent (projectForm) {
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the page from reloading
        const newProjectTitle = projectForm.querySelector('.new-task-title').value.trim();
        let errorMessage = '';
        let isCorrect = true;
        if (!newProjectTitle){
            errorMessage = 'Project name is required';
            isCorrect = false;
        } else if (existProject(newProjectTitle)) {
            errorMessage = `ERROR: Project <span class="popup-task-project">${newProjectTitle}</span> already exist`;
            isCorrect = false;
        }

        if (isCorrect) {
            DOMTodoList.addProject(newProjectTitle);
            printNewProject(newProjectTitle); 
            createHiddenPopup(`Project <span class="popup-task-project">${newProjectTitle}</span> created successfully`);
            closeNewProjectForm();
            saveInLocalStorageProject(newProjectTitle);
        } else {
            createHiddenPopup(errorMessage);
        }
        
    });
}

function existProject (projectName) {
    const projectButtons = document.querySelectorAll('.project-button');
    let exist = false;
    projectButtons.forEach(projectButton => {
        if (projectButton.getAttribute('data-project-type') === projectName.toLowerCase()) {
            exist = true;
        }
    });
    return exist;
}

function selectProjectButtonActive (projectName)  {
    closeHamburgerNav();
    
    const projectsButtonsElements = document.querySelectorAll(".actions-list button");
    const projectsButtonsArray = Array.from(projectsButtonsElements)

    const currentProjectButton = projectsButtonsArray.find(button => button.dataset.projectType == projectName);
    const projectTitleElement = document.querySelector('.project-title');
    projectsButtonsArray.forEach(button => button.classList.remove("active")); // Remove the active class from all the buttons
    currentProjectButton.classList.add("active"); // Add the active class to the clicked button

    projectTitleElement.innerHTML = projectName; // Change the project title
    DOMTodoList.setActiveProject(projectName); // Set the active project
    DOMTodoList.printAllTasks(); // Print all the tasks in the task list
}

function loadProjects(projectList) {
    projectList.forEach(projectTitle => printNewProject(projectTitle));
}

export { printNewProject, printAddProjectsElement, closeNewProjectForm, loadProjects, createProjectsEvents, selectProjectButtonActive };