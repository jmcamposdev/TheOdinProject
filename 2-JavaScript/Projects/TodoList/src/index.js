import "./css/global.css"
import "./css/header.css"
import "./css/main.css"
import "./css/task.css"
import "./css/popup.css"
import "./css/projects.css"
import "./css/hamburger.css"
import "./css/categoryList.css"
import Task from "./modules/Task/Task";
import DOMTodoListClass from "./modules/TodoList/DOMTodoList"
import { createProjectsEvent, createProjectsEvents, loadProjects, printAddProjectsElement, printNewProject } from "./modules/Project/DOMProjects";
import { createHamburgerNavEvent } from "./assets/Hamburger/hamburgerNav"
import { loadLocalStorage, loadLocalStorageProjects } from "./assets/LocalStorage/localStorage"

const DOMTodoList = new DOMTodoListClass();
function init()  {
    loadLocalStorage(DOMTodoList);
    loadLocalStorageProjects(loadProjects)
    DOMTodoList.printAllTasks();
    createProjectsEvents();
    printAddProjectsElement();
    createHamburgerNavEvent();
}

init();

export default DOMTodoList;