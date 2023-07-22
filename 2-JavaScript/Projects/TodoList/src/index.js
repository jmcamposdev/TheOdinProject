import "./css/global.css"
import "./css/header.css"
import "./css/main.css"
import "./css/task.css"
import Task from "./modules/Task/Task";
import DOMTodoListClass from "./modules/TodoList/DOMTodoList"

const DOMTodoList = new DOMTodoListClass();
function init()  {
    DOMTodoList.addTask(new Task('Task 3', 'This is the third task', new Date(2021, 0, 3, 0, 0, 0, 0), true, 'inbox'));
    DOMTodoList.addTask(new Task('Task 4', 'This is the fourth task', new Date(2021, 0, 3, 0, 0, 0, 0), false, 'inbox'));

    DOMTodoList.createAddTaskElement();
}

init();

export default DOMTodoList;