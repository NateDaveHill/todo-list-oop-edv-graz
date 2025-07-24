'use strict'
import Project from "./Project.js";
import { saveToLocalStorage,loadFromLocalStorage } from "../Controller/local-storage.js";
import { renderProjects } from "../View/render.js";

let projects = [];
const projectsFromLocalStorage = loadFromLocalStorage('projects')
if(projectsFromLocalStorage) {
    projects = projectsFromLocalStorage
    renderProjects(projects);
}


const addProjectBtn = document.querySelector(".add-proj-btn");
let inputName = document.querySelector('#proj_name');
addProjectBtn.addEventListener('click', () => {
    const project = new Project(inputName.value, "test2");
    projects.push(project);
    saveToLocalStorage(projects, "projects");
    renderProjects(projects);

})