import "./css/global.css"
import "./css/header.css"
import "./css/main.css"
import "./css/task.css"
import "./css/popup.css"
import "./css/projects.css"
import "./css/hamburger.css"
import Task from "./modules/Task/Task";
import DOMTodoListClass from "./modules/TodoList/DOMTodoList"
import { printAddProjectsElement } from "./modules/Project/DOMProjects";
import { createHamburgerNavEvent } from "./assets/Hamburger/hamburgerNav"

const DOMTodoList = new DOMTodoListClass();
function init()  {
    DOMTodoList.addTask(new Task('Task 3', 'This is the third task', new Date(2021, 0, 3, 0, 0, 0, 0), true, 'inbox', "Home"));
    DOMTodoList.addTask(new Task('Task 4', 'This is the fourth task', new Date(2021, 0, 3, 0, 0, 0, 0), false, 'inbox', "Outdoors"));
    DOMTodoList.printAllTasks();
    DOMTodoList.createProjectsEvents();
    printAddProjectsElement();
    createHamburgerNavEvent();
}

init();

export default DOMTodoList;