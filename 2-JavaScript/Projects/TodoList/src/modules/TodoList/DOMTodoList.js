import { parseISO, formatISO, endOfWeek, startOfWeek, isSameWeek, isThisWeek } from 'date-fns'
import Task from '../Task/Task.js';
import DOMTask from '../Task/DOMTask';
import TodoList from './TodoList.js';
import CheckBox from '../../assets/Task/CheckBox/checkBox.js';
import {isToday, inSameWeek } from '../../assets/GlobalFunctions/globalFunctions.js';
import createHiddenPopup from '../../assets/Popups/hiddenPopup.js';
import { closeNewProjectForm, createProjectsEvents, selectProjectButtonActive} from '../Project/DOMProjects.js';
import { closeHamburgerNav } from '../../assets/Hamburger/hamburgerNav.js';
import printCategoryList from '../../assets/Task/CategoriesList/categoryList.js';
import { ta } from 'date-fns/locale';
import { saveInLocalStorage } from '../../assets/LocalStorage/localStorage.js';


export default class DOMTodoList {

    constructor () {
    this.todolist = new TodoList();
    this.activeProject = "inbox"
    this.showProjectInTask = false;
    }

    setActiveProject(activeProject) {
        this.activeProject = activeProject;
        if (activeProject === "today" || activeProject === "week") {
            this.showProjectInTask = true;
        } else {
            this.showProjectInTask = false;
        }
    }

    /**
     *  Show all the tasks in the task list 
     *  depending on the project type
     * @param {String} projectType 
     */
    printAllTasks () {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = ''; // Clear the task list
        // Filter the task list by the active project
        const filterTask = this.getActiveTasks();
        // Print the task list
        printCategoryList(filterTask);
        filterTask.forEach(task => DOMTask.printTaskElement(task, this.showProjectInTask));
        this.printAddTaskElement(); // Create the add task element
    }

    printByCategories (categoriesList) {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = ''; // Clear the task list
        // Filter the task list by the active project
        const filterTask = this.tasksFilterByCategories(categoriesList, this.getActiveTasks());

        // Print the task list
        // printCategoryList(filterTask);
        filterTask.forEach(task => DOMTask.printTaskElement(task, this.showProjectInTask));
        this.printAddTaskElement(); // Create the add task element
    }

    tasksFilterByCategories (categoriesList, taskList) {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        const filterTaskList = [];

        taskList.forEach(task => {
            if (checker(task.getCategories(), categoriesList)) {
                filterTaskList.push(task);
            }
        })
        
        return filterTaskList;
    }

    updateCategoryList() {
        printCategoryList(this.getActiveTasks())
    }


    getActiveTasks ()  {
        let currentTaskList = [];
        if (this.activeProject == "today") {
            currentTaskList = this.todolist.getTodayTaskList();
        } else if (this.activeProject == "week") {
            currentTaskList = this.todolist.getWeekTaskList();
        } else {
            currentTaskList = this.todolist.getTaskListByProject(this.activeProject);
        }

        return currentTaskList;
    }

    getAllTasks () {
        return this.todolist.getTaskList();
    }

    addProject(projectTitle) {
        this.todolist.addProject(projectTitle);
    }

    addProjects(projectTitleList) {
        printCategoryList.forEach(projectTitle => this.addProject(projectTitle));
    }

    /**
     *  Add a task to 
     * @param {Task} task 
     */
    addTask (task) {
        this.todolist.insertTask(task);
        DOMTask.printTaskElement(task, this.showProjectInTask);
        saveInLocalStorage(this.getAllTasks());
    }

    addTasks (taskList) {
        const projectsAdded = [];
        taskList.forEach(task => {
            this.todolist.insertTask(task);
            const taskProject = task.project;
        })
    }



    /**
     *  Remove the task with the given id from the task list and the DOM
     * @param {*} id 
     */
    removeTask (id) {
        this.todolist.removeTask(id);
        const taskElement = document.querySelector(`[data-id="${id}"]`);
        taskElement.remove();
        saveInLocalStorage(this.getAllTasks());
        this.updateCategoryList();
    }

    removeAllTasksByProject (project) {
        this.todolist.removeAllTasksByProject(project);
    }

    editTask (id) {
        const task = this.todolist.getTask(id); // Get the task
        const taskElement = document.querySelector(`[data-id="${id}"]`); // Get the task element
        this.closeAllForms(); // Close all forms
        
        taskElement.innerHTML = this.createTaskForm(task);
        this.createEditTaskEvents(id, taskElement);
    }


    /**
     *  Update the task element in the task list
     *  Create the updated task element and replace the old task element with the updated task element
     * @param {Task} task 
     */
    updateTaskElement (task) {
        const taskOldElement = document.querySelector(`.task[data-id="${task.getId()}"]`);
        const taskUpdatedElement = DOMTask.createTaskElement(task);
        taskOldElement.replaceWith(taskUpdatedElement);
    }

    toggleCompleted (id) {
        this.todolist.toggleCompleted(id);
        const task = this.todolist.getTask(id);
        this.updateTaskElement(task);
    }

    /**
     *  Return the task with the given id
     *  If the task is not found, return null
     * @param {} id 
     * @returns 
     */
    getTask (id) {
        return this.todolist.getTask(id);
    }

    /**
     *  ----------------------
     *  Edit Task
     *  ----------------------
     */

    createEditTaskEvents (taskID, taskElement) {
        this.createEditTaskCloseEvent(taskID);
        this.createAddTaskOptionalDataEvent();
        CheckBox.addToggleEventListener(taskElement.querySelector('.check-box'));
        this.createEditTaskSubmitEvent(taskID);
    }

    createEditTaskCloseEvent (taskID) {
        const closeEditTaskForm = document.querySelector('.edit-task .close-new-task-form');
        closeEditTaskForm.addEventListener('click', () => {
            const task = this.getTask(taskID);
            this.updateTaskElement(task);
        });
    }

    closeEditTaskForm () {
        const editTaskForm = document.querySelector('.edit-task ');
        if (editTaskForm) {
            const taskID = editTaskForm.parentElement.dataset.id;
            const task = this.getTask(taskID);
            this.updateTaskElement(task);
        }
        
    }

    createEditTaskSubmitEvent (taskID) {
        const editTaskForm = document.querySelector('.edit-task .new-task-form'); // Get the edit task form
        editTaskForm.addEventListener('submit', (e) => { // Add the event listener to the edit task form
            e.preventDefault(); // Prevent the default submit event
            // Get the values from the edit task form
            const title = document.querySelector('.new-task-title').value;
            const description = document.querySelector('.new-task-notes').value;
            const completed = document.querySelector('.check-box').dataset.isCompleted == 'true' ? true : false;

            let tags = document.querySelector('.new-task-tags').value
            if (tags) {
                tags = tags.split(',').map(tag => tag.trim()); // Remove the white spaces from the tags
            } else {
                tags = []
            }

            let dueDate = parseISO(document.querySelector('.new-task-due-date').value);
            if (dueDate == 'Invalid Date') {
                dueDate = null;
            }
            
            const task = this.getTask(taskID);

            // Update the task with the new values
            task.setTitle(title);
            task.setDescription(description);
            task.setDueDate(dueDate);
            task.setCategories(tags);
            task.setCompleted(completed);

            // Update the task element in the task list
            this.updateTaskElement(task);
            this.updateCategoryList();
            saveInLocalStorage(this.getAllTasks());
        });
    }

    /**
     *  ----------------------
     *  Projects
     *  ----------------------
     */




    /**
     *  ----------------------
     *  Form Task 
     *  ----------------------
     */

    /**
     *  Create a task form used to:
     *  - Create a new task
     *  - Edit an existing task
     *  If the taskID is not provided, the form is used to create a new task
     *  If the taskID is provided, the form is used to edit an existing task
     * @param {Task} taskID 
     * @returns 
     */
    createTaskForm(task)  {
        let taskTitle = "";
        let taskNotes = "";
        let taskDueDate = "";
        let firstDateOfWeek = "";
        let lastDateOfWeek = "";
        let taskTags = "";
        let taskComplete = null;

        // If the active project is today, set the due date to today
        if (this.activeProject == 'today') {
            taskDueDate = formatISO(new Date(), {representation: 'date'});
        } else if (this.activeProject == 'week') { // If the active project is week, set the max due date to the end of the week
            firstDateOfWeek = formatISO(startOfWeek(new Date(), {weekStartsOn: 1}), {representation: 'date'});
            lastDateOfWeek =  formatISO(endOfWeek(new Date(), {weekStartsOn: 1}), {representation: 'date'});;
        }

        if (task) {
            taskTitle = task.getTitle();
            taskNotes = task.getDescription();
            taskComplete = task.isCompleted();
            if (task.getDueDate()){
                taskDueDate = formatISO(task.getDueDate(), {representation: 'date'});
            }
            taskTags = task.getCategories();
        }

        const newTaskForm = `
            <div class="${task ? "edit-task" : "task new-task"}">
                <form class="new-task-form">
                    ${taskComplete != null 
                    ? CheckBox.createCheckBoxElement(taskComplete).outerHTML
                    : ""}
                    <div class="form-inputs">
                        <input type="text" class="new-task-title" placeholder="${task ? "Title" : "New Task"}" value="${taskTitle}"  required>
                        <input type="text" class="new-task-notes" placeholder="Notes" value="${taskNotes}">
                        <div class="optional-data">
                            <div class="due-date-container">
                                <span class="due-date-icon material-symbols-outlined">flag</span>
                                <input type="date" class="new-task-due-date" value="${taskDueDate}" min="${firstDateOfWeek}" max="${lastDateOfWeek}">
                            </div>
                            <div class="tags-container">
                            <span class="tag-icon material-symbols-outlined">sell</span>
                                <input type="text" class="new-task-tags" placeholder="Ex: Github,RP..." value="${task ? taskTags.toString() : ""}">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <span class="close-new-task-form material-symbols-outlined">close</span>
                        <button type="submit" class="new-task-submit"><span class="material-symbols-outlined">${task ? "check" : "add"}</span></button>
                    </div>
                </form>
            </div>`;

        return newTaskForm;
    }

    addCheckBoxEventListener (id, taskForm) {
        // Get .task-info and .task-delete-container elements
        // Then get the first child of .task-info element and get all the children of the first child
        // Then find the child with the class .check-box
        const children = Array.from(taskForm.children.children[0]);
        const checkBox = children.find(child => child.classList.contains("check-box"));
        checkBox.addEventListener(("click"), () => {
            const task = DOMTodoList.getTask(id);
            const checkBoxElement = taskElement.querySelector(".check-box");
            task.toggleCompleted();
            DOMTask.updateCheckBoxElement(checkBoxElement, task.isCompleted())
        })
    }

    /**
     * Create the task creator element and add it to the task list
     * This element is used to create new tasks
     */
    printAddTaskElement () {
        const taskList = document.querySelector('.task-list');
        // Create the new task element
        const newTaskElement = `
            <div class="task new-task">
                <span class="material-symbols-outlined">add</span>
                <p class="task-title">Create Task</p>
            </div>`;

        // Add the new add task element to the task list
        taskList.insertAdjacentHTML('beforeend', newTaskElement);
        this.createAddTaskEvents(); // Add the event listeners to the new add task element
    }

    /**
     *  Show the create new task form when the add task element is clicked
     * Add the event listeners to the new task element
     */
    createAddTaskEvents () { 
        // Add the event listener to the new task element
        const addTaskElement = document.querySelector('.new-task');
        addTaskElement.addEventListener('click', () => {
            this.closeAllForms() // Close all the forms
            this.printAddTaskForm(); // Show the add task form
            this.createAddTaskFormCloseEvent(); // Add the event listener to the close button
            this.createAddTaskSubmitEvent(); // Add the event listener to the submit button
            this.createAddTaskOptionalDataEvent(); // Add the event listener to the optional data icons
        });
    }

    /**
     * Show the add task form
     * This form is used to create new tasks
     */ 
    printAddTaskForm () {
        const newTask = document.querySelector('.new-task');
        newTask.classList.add('new-task-form');
        const newTaskForm = this.createTaskForm(); // Create the new task form
        newTask.outerHTML = newTaskForm; // Replace the new task element with the new task form
    }

    /**
     * Close the add task form
     * Remove the add task form and replace it with the add task element
     */
    closeAddTaskForm () {
        const newTaskForm = document.querySelector('.new-task');
        newTaskForm.remove();
        this.printAddTaskElement();
    }

    /**
     * ----------------------
     *  Add Task Form Events
     * ----------------------
     */

    /**
     * Add the event listener to the Add task form submit button
     */
    createAddTaskSubmitEvent () {
        const newTaskForm = document.querySelector('.new-task-form');
        newTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.querySelector('.new-task-title').value;

            // If the title is empty, don't create the task
            if (title.trim() == '') {
                document.querySelector('.new-task-title').value = '';
                createHiddenPopup('Task title cannot be empty', 1500);
                return;
            } 


            const description = document.querySelector('.new-task-notes').value;
            let dueDate = parseISO(document.querySelector('.new-task-due-date').value);
            if (dueDate == 'Invalid Date') {
                dueDate = null;
            }
            let tags = document.querySelector('.new-task-tags').value
            if (tags) {
                tags = tags.split(',').map(tag => tag.trim()); // Remove the white spaces from the tags
            } else {
                tags = []
            }
            
            let taskProject = this.activeProject;
            if (taskProject == 'today' || taskProject == 'week') {
                taskProject = 'inbox';
            }

            // Create the task
            const newTask = new Task(title, description, dueDate, false, taskProject, tags);

            if (this.activeProject == 'today' && !isToday(newTask.dueDate)) {
                this.todolist.insertTask(newTask);
                createHiddenPopup('Task added to inbox', 1500);
            } else if (this.activeProject == 'week' && !isSameWeek(newTask.dueDate, new Date())) {
                this.todolist.insertTask(newTask);
                createHiddenPopup('Task added to inbox', 1500);
            } else {
                this.addTask(newTask);
            }

            
            this.updateCategoryList()
            this.closeAddTaskForm();
        });
    }

    /**
     * Add the event listener to the Add task form close button
     */
    createAddTaskFormCloseEvent () {
        const closeNewTaskForm = document.querySelector('.new-task .close-new-task-form');
        closeNewTaskForm.addEventListener('click', () => {
            this.closeAddTaskForm();
        });
    }

    /**
     *  Add the event listener to the optional data icons
     *  When the icon is clicked, show the optional data form
     *  When the icon is clicked again, hide the optional data form
     *  Only one optional data form can be shown at a time
     *  If the user clicks on another optional data icon, hide the current optional data form and show the new optional data form
     */
    createAddTaskOptionalDataEvent () {
        const optionalData = document.querySelectorAll('.optional-data');
        for (let i = 0; i < optionalData.length; i++) {
            const optionalDataChildren = Array.from(optionalData[i].children);
            optionalDataChildren.forEach(currentChild => {
                const icon = currentChild.querySelector('span');
                icon.addEventListener('click', () => {
                    currentChild.classList.toggle('active-form');
                    optionalDataChildren.forEach(child => {
                        if (child !== currentChild) {
                            child.classList.remove('active-form');
                        }
                    });
                });
            });
        }
        
    }

    removeProject (project) {
        const projectButton = document.querySelector(`button[data-project-type="${project}"]`).parentElement;
        projectButton.removeEventListener("click", () => this.selectProjectButtonActive(button.dataset.projectType))
        projectButton.remove();
        this.removeAllTasksByProject(project);
        createProjectsEvents()
        selectProjectButtonActive('inbox');
        createHiddenPopup(`Project <span class="popup-task-project">${project}</span> deleted successfully`);
    }

    closeAllForms ()  {
        closeNewProjectForm();
        this.closeAddTaskForm()
        this.closeEditTaskForm()
    }
}

