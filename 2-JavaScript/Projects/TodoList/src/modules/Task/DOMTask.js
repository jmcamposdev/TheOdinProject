import { format } from 'date-fns';
import DOMTodoList from '../../index.js';
import Task from './Task.js';
import CheckBox from '../../assets/Task/CheckBox/checkBox.js';
import RemoveButton from '../../assets/Task/RemoveButton/removeButton.js';
export default class DOMTask {

    /**
     * Create a new task element and add it to the task list
     * @param {Task} task 
     */
    static printTaskElement (task, showProject = false) {
        const taskList = document.querySelector('.task-list');
        const taskElement = DOMTask.createTaskElement(task, showProject);
        taskList.appendChild(taskElement)
        //DOMTodoList.updateCategoryList();
    }

    /**
     *  Create a new task element,
     *  Add the event listener to the checkbox to toggle the completed state of the task
     *  and return the task element
     * @param {Task} task 
     * @returns {HTMLElement} taskElement 
     */
    static createTaskElement (task, showProject = false) {
        // Create the task element
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.dataset.id = task.getId();

        // Create the task info element
        const taskInfoElement = document.createElement("div");
        taskInfoElement.classList.add("task-info");

        // Create the checkbox element and append it to the task info element
        const checkBoxElement = CheckBox.createCheckBoxElement(task.isCompleted());
        taskInfoElement.appendChild(checkBoxElement);

        const dueDateElement = task.getDueDate()
        ? DOMTask.createDueDateElement(task.getDueDate())
        : "";
        const categoryElement = task.getCategories().length >= 1
        ? DOMTask.createCategoryElement(task.getCategories()[0])
        : "";
        const projectElement = showProject 
        ? DOMTask.createProjectElement(task.getProject())
        : "";
        // Create the task title element and append it to the task info element
        taskInfoElement.innerHTML += `
            <div class="extra-data">
                ${dueDateElement}
                ${categoryElement}
                ${projectElement}
            </div> 
            <p class="task-title">${task.getTitle()}</p>`;
        
        // Create the task delete container element
        const taskDeleteContainer = RemoveButton.createRemoveButtonElement();

        // Append the task info element and the task delete container element to the task element
        taskElement.appendChild(taskInfoElement);
        taskElement.appendChild(taskDeleteContainer);

        // Add the event listener to the checkbox to toggle the completed state of the task
        const checkBox = taskElement.querySelector(".check-box");
        CheckBox.addToggleEventListener(checkBox); // Change de html element
        CheckBox.addCheckBoxCompleteEventListener(checkBox, task); // Change the task object
        
        const removeButton = taskElement.querySelector(".delete-icon");
        RemoveButton.addRemoveTaskEventListener(removeButton, task.getId());
        DOMTask.addEditTaskEventListener(taskElement.querySelector(".task-title")); // Add the event listener to the task element to edit the task
        return taskElement;
    }

    static createDueDateElement (dueDate) {
        const formatDueDate = format(dueDate, "dd E");
        return `<p class="task-due-date">${formatDueDate}</p>`;
    }

    static createCategoryElement (category) {
        return `<p class="task-category">${category}</p>`;
    }

    static createProjectElement (project) {
        console.log(project);
        return `<p class="task-project">${project}</p>`;
    }
    static addEditTaskEventListener (taskElement) {
        taskElement.addEventListener("dblclick", () => {
            DOMTodoList.editTask(taskElement.parentElement.parentElement.dataset.id);
        });
    }
}