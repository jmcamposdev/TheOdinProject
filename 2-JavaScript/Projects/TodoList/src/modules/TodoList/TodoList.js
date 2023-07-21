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

    removeTask (task) {
        const index = this.taskList.indexOf(task);
        if (index > -1) {
            this.taskList.splice(index, 1);
        }
    }


    static fromJSON (json) {
        let todoList = new TodoList();
        for (let task of json.taskList) {
            todoList.addTask(Task.fromJSON(task));
        }
        return todoList;
    }
}