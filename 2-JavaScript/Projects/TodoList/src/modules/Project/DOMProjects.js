import DOMTodoList from "../../index.js"
const projectFormContainer = document.querySelector('.create-new-project-container');

function printNewProject (projectTitle) {
    const projectButtonContainer = document.querySelector('.projects-actions-list .actions-list');
    const projectButton = document.createElement('button');
    projectButton.setAttribute('data-project-type', projectTitle.toLowerCase());
    projectButton.classList.add('project-button');
    const icon = `<span class="material-symbols-outlined">
                    workspaces
                </span>`
    projectButton.innerHTML = icon + projectTitle;
    projectButtonContainer.appendChild(projectButton);

    DOMTodoList.createProjectsEvents();
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
        projectFormContainer.innerHTML = '';
        printAddProjectsElement();
    });
}

function createNewProjectSubmitEvent (projectForm) {
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the page from reloading
        const newProjectTitle = projectForm.querySelector('.new-task-title').value;
        if (newProjectTitle){
            printNewProject(newProjectTitle); 
        } 
        
    });
}

export { printAddProjectsElement };