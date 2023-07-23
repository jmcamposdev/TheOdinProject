import { format } from 'date-fns';
import DOMTodoList from '../../index.js';
import Task from './Task.js';
import { ta } from 'date-fns/locale';
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
        let checkIcon = task.getCompleted() ? 'check_circle' : 'radio_button_unchecked';
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.dataset.id = task.getId();
        taskElement.innerHTML = `
            <div class="task-info">
                <span class="check-box material-symbols-outlined">${checkIcon}</span>
                <div class="extra-data"></div> 
                <p class="task-title">${task.getTitle()}</p>
            </div>
            <div class="task-delete-container">
                <span class="delete-icon material-symbols-outlined">delete</span>
            </div>`;

        // Add the due date to the task element if the task has a due date
        if (task.getDueDate()) DOMTask.addDueDate(taskElement, task.getDueDate());

        DOMTask.addCheckBoxEventListener(task.getId(), taskElement); // Add the event listener to the checkbox to toggle the completed state of the task
        DOMTask.addRemoveTaskEventListener(taskElement); // Add the event listener to the delete icon to remove the task from the task list
        DOMTask.addEditTaskEventListener(taskElement); // Add the event listener to the task element to edit the task
        return taskElement;
    }

    static addDueDate (taskElement, dueDate) {
        const taskInfo = taskElement.querySelector(".task-info .extra-data");
        const dueDateElement = document.createElement("p");
        dueDateElement.classList.add("task-due-date");
        dueDateElement.textContent = format(dueDate, "dd E");
        taskInfo.appendChild(dueDateElement);
    }

    /**
     *  Add the event listener to the checkbox to toggle the completed state of the task
     * @param {Task} task 
     * @param {HTMLElement} taskElement 
     */
    static addCheckBoxEventListener (id, taskElement) {
        // Get .task-info and .task-delete-container elements
        // Then get the first child of .task-info element and get all the children of the first child
        // Then find the child with the class .check-box
        const children = Array.from(taskElement.children[0].children);
        const checkBox = children.find(child => child.classList.contains("check-box"));
        checkBox.addEventListener(("click"), () => {
            DOMTodoList.toggleCompleted(id);
        })
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

    
}