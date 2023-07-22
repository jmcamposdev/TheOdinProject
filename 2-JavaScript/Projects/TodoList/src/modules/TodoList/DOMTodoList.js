import { parseISO } from 'date-fns'
import Task from '../Task/Task.js';
import DOMTask from '../Task/DOMTask';
import TodoList from './TodoList.js';

export default class DOMTodoList {

    constructor () {
    this.todolist = new TodoList();
    }

    /**
     *  Show all the tasks in the task list 
     *  depending on the project type
     * @param {String} projectType 
     */
    printAllTasks (projectType) {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = ''; // Clear the task list
        if (projectType === 'inbox') {
            this.todolist.getTaskList().forEach(task => {
                DOMTask.printTaskElement(task);
            });
        }

        this.createAddTaskElement(); // Create the add task element
    }

    /**
     *  Add a task to 
     * @param {Task} task 
     */
    addTask (task) {
        this.todolist.insertTask(task);
        DOMTask.printTaskElement(task);
    }

    removeTask (id) {
        this.todolist.removeTask(id);
        const taskElement = document.querySelector(`[data-id="${id}"]`);
        taskElement.remove();
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
     *  Form Task 
     *  ----------------------
     */

    /**
     * Create the task creator element and add it to the task list
     * This element is used to create new tasks
     */
    createAddTaskElement () {
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
     * Show the add task form
     * This form is used to create new tasks
     */
    showAddTaskForm () {
        const newTask = document.querySelector('.new-task');
        newTask.classList.add('new-task-form');
        const newTaskForm = `
            <div class="task new-task">
                <form class="new-task-form">
                    <div class="form-inputs">
                        <input type="text" class="new-task-title" placeholder="New Task" required>
                        <input type="text" class="new-task-notes" placeholder="Notes">
                        <div class="optional-data">
                            <div class="due-date-container">
                                <span class="due-date-icon material-symbols-outlined">flag</span>
                                <input type="date" class="new-task-due-date">
                            </div>
                            <div class="tags-container">
                            <span class="tag-icon material-symbols-outlined">sell</span>
                                <input type="text" class="new-task-tags" placeholder="New Tag">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <span class="close-new-task-form material-symbols-outlined">close</span>
                        <button type="submit" class="new-task-submit"><span class="material-symbols-outlined">add</span></button>
                    </div>
                </form>
            </div>`;

        newTask.outerHTML = newTaskForm; // Replace the new task element with the new task form
    }

    /**
     * Add the event listeners to the new task element
     */
    createAddTaskEvents () { 
        // Add the event listener to the new task element
        const addTaskElement = document.querySelector('.new-task');
        addTaskElement.addEventListener('click', () => {
            this.showAddTaskForm(); // Show the add task form
            this.createAddTaskFormCloseEvent(); // Add the event listener to the close button
            this.createAddTaskSubmitEvent(); // Add the event listener to the submit button
            this.createAddTaskOptionalDataEvent(); // Add the event listener to the optional data icons
        });
    }

    /**
     * Add the event listener to the Add task form submit button
     */
    createAddTaskSubmitEvent () {
        const newTaskForm = document.querySelector('.new-task-form');
        newTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.querySelector('.new-task-title').value;
            const description = document.querySelector('.new-task-notes').value;
            let dueDate = parseISO(document.querySelector('.new-task-due-date').value);
            if (dueDate == 'Invalid Date') {
                dueDate = null;
            }
            const tags = document.querySelector('.new-task-tags');
            const newTask = new Task(title, description, dueDate, false, null, tags);
            this.addTask(newTask);
            this.closeAddTaskForm();
        });
    }

    /**
     * Add the event listener to the Add task form close button
     */
    createAddTaskFormCloseEvent () {
        const closeNewTaskForm = document.querySelector('.close-new-task-form');
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
        const optionalData = document.querySelector('.optional-data');
        const optionalDataChildren = Array.from(optionalData.children);
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


    /**
     * Close the add task form
     * Remove the add task form and replace it with the add task element
     */
    closeAddTaskForm () {
        const newTaskForm = document.querySelector('.new-task');
        newTaskForm.remove();
        this.createAddTaskElement();
    }
}