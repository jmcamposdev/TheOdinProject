import { closeHamburgerNav } from "../../assets/Hamburger/hamburgerNav.js";
import { removeInLocalStorageProject, saveInLocalStorageProject } from "../../assets/LocalStorage/localStorage.js";
import createHiddenPopup from "../../assets/Popups/hiddenPopup.js";
import DOMTodoList from "../../index.js"
const projectFormContainer = document.querySelector('.create-new-project-container');

function printNewProject (projectTitle) {
    const projectButtonContainer = document.querySelector('.projects-actions-list .actions-list');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectButton = document.createElement('button');
    projectButton.setAttribute('data-project-type', projectTitle.toLowerCase());
    projectButton.classList.add('project-button');

    const projectInformation = document.createElement('div');
    projectInformation.classList.add('project-information');

    const icon = `<span class="material-symbols-outlined">
                    workspaces
                </span>`
    projectInformation.innerHTML = icon + projectTitle;


    const deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add('delete-icon-container');

    const deleteIcon = document.createElement('span'); 
    deleteIcon.classList.add('project-delete-icon', "material-symbols-outlined");
    deleteIcon.textContent = 'delete';

    deleteIconContainer.appendChild(deleteIcon);

    projectButton.appendChild(projectInformation);

    projectContainer.appendChild(projectButton);
    projectContainer.appendChild(deleteIconContainer);

    projectButtonContainer.appendChild(projectContainer);

    createDeleteProjectEvent(projectTitle, deleteIcon);
    createProjectsEvents();
}

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

function createProjectsEvents () {
    const projectsButtonsElements = document.querySelectorAll(".actions-list button");
    const projectsButtonsArray = Array.from(projectsButtonsElements)
    projectsButtonsArray.forEach(button => {
        button.addEventListener("click", () => selectProjectButtonActive(button.dataset.projectType))
    });
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