export default class TodoList {
    constructor () {
        this.taskList = [];
    }

    getTaskList () {
        return this.taskList;
    }

    setTaskList (taskList) {
        this.taskList = taskList;
    }

    insertTask (task) {
        this.taskList.push(task);
    }
    getTask (id) {
        return this.taskList.find(task => task.id == id);
    }

    removeTask (task) {
        const index = this.taskList.indexOf(task);
        if (index > -1) {
            this.taskList.splice(index, 1);
        }
    }

    updateTask (task) {
        const index = this.taskList.findIndex(task => task.id == task.id);
        if (index > -1) {
            this.taskList[index] = task;
        }
    }

    toggleCompleted (id) {
        const task = this.getTask(id);
        task.toggleCompleted();
    }


    static fromJSON (json) {
        let todoList = new TodoList();
        for (let task of json.taskList) {
            todoList.addTask(Task.fromJSON(task));
        }
        return todoList;
    }
}