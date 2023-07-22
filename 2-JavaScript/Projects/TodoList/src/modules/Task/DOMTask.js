import DOMTodoList from '../../index.js';
import Task from './Task.js';
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
            <span class="check-box material-symbols-outlined">${checkIcon}</span>
            <p class="task-title">${task.getTitle()}</p>`;

        DOMTask.addCheckBoxEventListener(task, taskElement); // Add the event listener to the checkbox to toggle the completed state of the task
        return taskElement;
    }

    /**
     *  Add the event listener to the checkbox to toggle the completed state of the task
     * @param {Task} task 
     * @param {HTMLElement} taskElement 
     */
    static addCheckBoxEventListener (task, taskElement) {
        const children = Array.from(taskElement.children);
        const checkBox = children.find(child => child.classList.contains("check-box"));
        checkBox.addEventListener(("click"), () => {
            task.toggleCompleted();
            this.updateTaskElement(task)
        })
    }

    /**
     *  Update the task element in the task list
     *  Create the updated task element and replace the old task element with the updated task element
     * @param {Task} task 
     */
    static updateTaskElement (task) {
        const taskOldElement = document.querySelector(`.task[data-id="${task.getId()}"]`);
        const taskUpdatedElement = DOMTask.createTaskElement(task);
        taskOldElement.replaceWith(taskUpdatedElement);
    }
}