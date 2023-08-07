import Task from "../../modules/Task/Task";

function saveInLocalStorage(taskList) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}
function saveInLocalStorageProject(projectTitle) {
    // if (localStorage.getItem("projectList")) {
    //     console.log("created");
    //     localStorage.setItem("projectList", [""]);
    // }
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
    console.log(projectTitle);
    let localProjectList = JSON.parse(localStorage.getItem("projectList"));
    localProjectList = localProjectList.filter(project => project != projectTitle);
    console.log(localProjectList);
    localStorage.setItem("projectList", JSON.stringify(localProjectList));
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
    console.log(localStorageProjectList);

    if (localStorageProjectList) {
        loadProjects(localStorageProjectList)
    }
} 

export {saveInLocalStorage, saveInLocalStorageProject, loadLocalStorage, loadLocalStorageProjects,  removeInLocalStorageProject};