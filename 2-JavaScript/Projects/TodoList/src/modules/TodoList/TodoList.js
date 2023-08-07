export default class TodoList {
    constructor () {
        this.taskList = [];
        this.projectList = [];
    }

    addProject(projectTitle) {
        if (!this.projectList.includes(projectTitle)) {
            this.projectList.push(projectTitle);
        }
    }

    getProjectList() {
        return this.projectList;
    }

    getTaskList () {
        return this.taskList;
    }

    getTaskListByProject (project) {
        return this.taskList.filter(task => task.project == project);
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

    removeTask (id) {
        this.taskList = this.taskList.filter(t => t.id != id);
    }

    removeAllTasksByProject (project) {
        this.taskList = this.taskList.filter(task => task.project != project);
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