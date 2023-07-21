import Task from './Task.js';
export default class DOMTask {

    /**
     * Create a new task element and add it to the task list
     * @param {Task} task 
     */
    static createTaskElement (task) {
        const taskList = document.querySelector('.task-list');
        const taskElement = `
            <div class="task">
                <span class="material-symbols-outlined">radio_button_unchecked</span>
                <p class="task-title">${task.getTitle()}</p>
            </div>`;
        taskList.insertAdjacentHTML('beforeend', taskElement);
    }

    /**
     * Create the task creator element and add it to the task list
     * This element is used to create new tasks
     */
    static createAddTaskElement () {
        const taskList = document.querySelector('.task-list');
        // Create the new task element
        const newTaskElement = `
            <div class="task new-task">
                <span class="material-symbols-outlined">add</span>
                <p class="task-title">Create Task</p>
            </div>`;

        // Add the new add task element to the task list
        taskList.insertAdjacentHTML('beforeend', newTaskElement);
        DOMTask.createAddTaskEvents(); // Add the event listeners to the new add task element
    }

    /**
     * Show the add task form
     * This form is used to create new tasks
     */
    static showAddTaskForm () {
        const newTask = document.querySelector('.new-task');
        newTask.classList.add('new-task-form');
        const newTaskForm = `
            <div class="task new-task">
                <form class="new-task-form">
                    <div class="form-inputs">
                        <input type="text" class="new-task-title" placeholder="New Task" required>
                        <input type="text" class="new-task-notes" placeholder="Notes">
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
     * Close the add task form
     * Remove the add task form and replace it with the add task element
     */
        static closeNewTaskForm () {
            const newTaskForm = document.querySelector('.new-task');
            newTaskForm.remove();
            DOMTask.createAddTaskElement();
        }

    /**
     * ----------------------
     * Event Listeners
     * ----------------------
     */

    /**
     * Add the event listeners to the new task element
     */
    static createAddTaskEvents () { 
        // Add the event listener to the new task element
        const newTask = document.querySelector('.new-task');
        newTask.addEventListener('click', () => {
            DOMTask.showAddTaskForm(); // Show the add task form
            DOMTask.createAddTaskFormCloseEvent();
            DOMTask.createAddTaskSubmitEvent();
        });
    }

    /**
     * Add the event listener to the Add task form submit button
     */
    static createAddTaskSubmitEvent () {
        const newTaskForm = document.querySelector('.new-task-form');
        newTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTaskTitle = document.querySelector('.new-task-title');
            const newTaskDescription = document.querySelector('.new-task-notes');
            const newTask = new Task(newTaskTitle.value, newTaskDescription.value, null, false, null);
            DOMTask.createTaskElement(newTask);
            DOMTask.closeNewTaskForm();
        });
    }

    /**
     * Add the event listener to the Add task form close button
     */
    static createAddTaskFormCloseEvent () {
        const closeNewTaskForm = document.querySelector('.close-new-task-form');
        closeNewTaskForm.addEventListener('click', () => {
            DOMTask.closeNewTaskForm();
        });
    }


}