'use strict'
import Project from "./Project.js";
import Todo from "./Todo.js";
import { saveToLocalStorage,loadFromLocalStorage } from "../Controller/local-storage.js";
import { renderProjects } from "../View/render.js";

let tempProjectId = 0;

let projects = [];
const projectsFromLocalStorage = loadFromLocalStorage('projects')
if(projectsFromLocalStorage) {
    projects = projectsFromLocalStorage
    renderProjects(projects);
}


const addProjectBtn = document.querySelector('.add-proj-btn');
let inputName = document.querySelector('#proj_name');
addProjectBtn.addEventListener('click', () => {
    const project = new Project(Date.now(), inputName.value, "Test Projects");
    projects.push(project);
    saveToLocalStorage(projects, "projects");
    renderProjects(projects);
    tempProjectId = project.id;
})


const addTodoBtn = document.querySelector('.add-todo-btn');
let inputTitle = document.querySelector('#todo_title');
let inputDesc = document.querySelector('#todo_desc');
let inputPrio = document.querySelector('#todo_prio');
addTodoBtn.addEventListener('click', () => {
    const todo = new Todo(Date.now(), inputTitle.value, inputDesc.value, inputPrio.value);
    if(projectsFromLocalStorage) {
        if (tempProjectId !== 0) {
            const project = projects.find(p => p.id === tempProjectId);
            if (project) {
                project.todos.push(todo);
                saveToLocalStorage(projects, "projects");
                renderProjects(projects);
                console.log("Todo added:", todo);
            } else {
                console.warn("Project not found for ID:", tempProjectId);
            }
        }
    }
})