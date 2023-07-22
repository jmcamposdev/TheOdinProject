import "./css/global.css"
import "./css/header.css"
import "./css/main.css"
import Task from "./modules/Task/Task";
import DOMTodoListClass from "./modules/TodoList/DOMTodoList"

const DOMTodoList = new DOMTodoListClass();
function init()  {
    DOMTodoList.addTask(new Task('Task 3', 'This is the third task', '2021-01-03', true, 'inbox'));
    DOMTodoList.addTask(new Task('Task 4', 'This is the fourth task', '2021-01-04', false, 'inbox'));

    DOMTodoList.createAddTaskElement();
}

init();

export default DOMTodoList;