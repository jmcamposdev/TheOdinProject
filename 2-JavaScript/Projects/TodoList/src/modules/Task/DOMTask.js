import Task from './Task.js';
export default class DOMTask {

    /**
     * Create a new task element and add it to the task list
     * @param {Task} task 
     */
    static printTaskElement (task) {
        const taskList = document.querySelector('.task-list');
        let checkIcon = task.getCompleted() ? 'check_circle' : 'radio_button_unchecked';
        const taskElement = `
            <div class="task">
                <span class="material-symbols-outlined">${checkIcon}</span>
                <p class="task-title">${task.getTitle()}</p>
            </div>`;
        taskList.insertAdjacentHTML('beforeend', taskElement);
    }

    

    /**
     * ----------------------
     * Event Listeners
     * ----------------------
     */


}