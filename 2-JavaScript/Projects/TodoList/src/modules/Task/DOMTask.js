import { format } from 'date-fns';
import DOMTodoList from '../../index.js';
import Task from './Task.js';
import CheckBox from '../../assets/Task/CheckBox/checkBox.js';
export default class DOMTask {

    /**
     * Create a new task element and add it to the task list
     * @param {Task} task 
     */
    static printTaskElement (task) {
        const taskList = document.querySelector('.task-list');
        const taskElement = DOMTask.createTaskElement(task);
        taskList.appendChild(taskElement)
    }

    /**
     *  Create a new task element,
     *  Add the event listener to the checkbox to toggle the completed state of the task
     *  and return the task element
     * @param {Task} task 
     * @returns {HTMLElement} taskElement 
     */
    static createTaskElement (task) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.dataset.id = task.getId();

        const taskInfoElement = document.createElement("div");
        taskInfoElement.classList.add("task-info");

        const checkBoxElement = CheckBox.createCheckBoxElement(task.isCompleted());
        taskInfoElement.appendChild(checkBoxElement);

        taskInfoElement.innerHTML += `
            <div class="extra-data">
                ${task.getDueDate()
                ? DOMTask.createDueDateElement(task.getDueDate())
                : ""}
            </div> 
            <p class="task-title">${task.getTitle()}</p>`;
        
        const taskDeleteContainer = document.createElement("div");
        taskDeleteContainer.classList.add("task-delete-container");
        taskDeleteContainer.innerHTML = `
            <span class="delete-icon material-symbols-outlined">delete</span>`;

        taskElement.appendChild(taskInfoElement);
        taskElement.appendChild(taskDeleteContainer);

        const checkBox = taskElement.querySelector(".check-box");
        CheckBox.addToggleEventListener(checkBox);
        CheckBox.addCheckBoxCompleteEventListener(checkBox, task);
        // DOMTask.addRemoveTaskEventListener(taskElement); // Add the event listener to the delete icon to remove the task from the task list
        // DOMTask.addEditTaskEventListener(taskElement); // Add the event listener to the task element to edit the task
        return taskElement;
    }

    static createDueDateElement (dueDate) {
        const formatDueDate = format(dueDate, "dd E");
        return `<p class="task-due-date">${formatDueDate}</p>`;
    }

    static addRemoveTaskEventListener (taskElement) {
        // Get .task-info and .task-delete-container elements
        // Then get the first child of .task-info element and get all the children of the first child
        // Then find the child with the class .check-box
        const children = Array.from(taskElement.children[1].children);
        const checkBox = children.find(child => child.classList.contains("delete-icon"));
        checkBox.addEventListener(("click"), () => {
            DOMTodoList.removeTask(taskElement.dataset.id);
        })
    }

    static addEditTaskEventListener (taskElement) {
        taskElement.addEventListener("dblclick", () => {
            DOMTodoList.editTask(taskElement.dataset.id);
        });
    }

    static updateCheckBoxElement (checkBoxElement, isChecked) {
        checkBoxElement.dataset.isCompleted = isChecked;
        checkBoxElement.textContent = isChecked ? "check_circle" : "radio_button_unchecked"
    }

    
}