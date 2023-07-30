import DOMTodoList from "../../..";

export default class RemoveButton {
    static createRemoveButtonElement () {
        const taskDeleteContainer = document.createElement("div");
        taskDeleteContainer.classList.add("task-delete-container");
        taskDeleteContainer.innerHTML = `
            <span class="delete-icon material-symbols-outlined">delete</span>`;
        
        return taskDeleteContainer;
    }

    static addRemoveTaskEventListener (removeElement, taskId) {
        removeElement.addEventListener(("click"), () => {
            DOMTodoList.removeTask(taskId);
        })
    }
}