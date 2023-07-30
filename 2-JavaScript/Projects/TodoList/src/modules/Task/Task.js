import { v4 as uuidv4 } from 'uuid';

export default class Task {
    constructor (title, description, dueDate, completed, project, tags) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
        this.project = project;
        this.tags = tags;
    }

    getId () {
        return this.id;
    }

    getTitle () {
        return this.title;
    }
    setTitle (title) {
        this.title = title;
    }

    getDescription () {
        return this.description;
    }
    setDescription (description) {
        this.description = description;
    }

    getDueDate () {
        return this.dueDate;
    }
    setDueDate (dueDate) {
        this.dueDate = dueDate;
    }

    isCompleted () {
        return this.completed;
    }
    setCompleted (completed) {
        this.completed = completed;
    }
    toggleCompleted () {
        this.completed = !this.completed;
    }

    toggleCompleted () {
        this.completed = !this.completed;
    }

    getProject () {
        return this.project;
    }
    setProject (project) {
        this.project = project;
    }

    getTags () {
        return this.tags;
    }

    setTags (tags) {
        this.tags = tags;
    }

    toString () {
        return `Title: ${this.title}\nDescription: ${this.description}\nDue Date: ${this.dueDate}\nCompleted: ${this.completed}`;
    }

    static fromJSON (json) {
        return new Task(json.title, json.description, json.dueDate, json.completed);
    }

    static fromJSONList (jsonList) {
        let taskList = [];
        for (let json of jsonList) {
            taskList.push(Task.fromJSON(json));
        }
        return taskList;
    }

    static toJSON (task) {
        return JSON.stringify(task);
    }

    static toJSONList (taskList) {
        let jsonList = [];
        for (let task of taskList) {
            jsonList.push(Task.toJSON(task));
        }
        return jsonList;
    }

    static toLocalStorage (taskList) {
        localStorage.setItem('taskList', Task.toJSONList(taskList));
    }

    static fromLocalStorage () {
        return Task.fromJSONList(JSON.parse(localStorage.getItem('taskList')));
    }
}