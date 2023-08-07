import Task from "../../modules/Task/Task";

function saveInLocalStorage(taskList) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}
function saveInLocalStorageProject(projectTitle) {
    let localProjectList = JSON.parse(localStorage.getItem("projectList"));
    
    if (localProjectList) {
        localProjectList.push(projectTitle);
    } else {
        localProjectList = [];
        localProjectList.push(projectTitle);
    }
    
    localStorage.setItem("projectList", JSON.stringify(localProjectList));
}

function removeInLocalStorageProject(projectTitle) {
    let localProjectList = JSON.parse(localStorage.getItem("projectList"));
    console.log(localProjectList);
    localProjectList = localProjectList.filter(project => project != projectTitle);
    localStorage.setItem("projectList", JSON.stringify(localProjectList));

    let localTaskList = JSON.parse(localStorage.getItem("taskList"));
    localTaskList = localTaskList.filter(task => task.project != projectTitle);
    localStorage.setItem("taskList", JSON.stringify(localTaskList));
}

function loadLocalStorage(DOMTodoList) {
    let localStorageTaskList = JSON.parse(localStorage.getItem("taskList"));

    if (localStorageTaskList) {
        localStorageTaskList = Task.fromJSONList(localStorageTaskList);
        DOMTodoList.addTasks(localStorageTaskList)
        
    }
}

function loadLocalStorageProjects(loadProjects){
    let localStorageProjectList = JSON.parse(localStorage.getItem("projectList"));

    if (localStorageProjectList) {
        loadProjects(localStorageProjectList)
    }
} 

export {saveInLocalStorage, saveInLocalStorageProject, loadLocalStorage, loadLocalStorageProjects,  removeInLocalStorageProject};