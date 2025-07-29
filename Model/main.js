'use strict'
import Project from "./Project.js";
import Todo from "./Todo.js";
import { saveToLocalStorage, loadFromLocalStorage } from "../Controller/local-storage.js";
import { renderProjects, renderTodos } from "../View/render.js";

// Initialize tempProjectId
let tempProjectId = 0;
const tempIdFromStorage = localStorage.getItem('tempProjectId');
if (tempIdFromStorage) {
    tempProjectId = parseInt(tempIdFromStorage);
}

// Load projects from localStorage
let projects = [];
const projectsFromLocalStorage = loadFromLocalStorage('projects');
if (projectsFromLocalStorage) {
    projects = projectsFromLocalStorage;
    renderProjects(projects);
    
    // If there's a tempProjectId, show its todos
    if (tempProjectId) {
        const selectedProject = projects.find(p => p.id === tempProjectId);
        if (selectedProject) {
            renderTodos(selectedProject);
        }
    }
}

// Add project functionality
const addProjectBtn = document.querySelector('.add-proj-btn');
let inputName = document.querySelector('#proj_name');

addProjectBtn.addEventListener('click', () => {
    if (!inputName.value.trim()) {
        console.warn("Project name cannot be empty");
        return;
    }

    const newId = Date.now();
    const project = new Project(newId, inputName.value, "Test Projects");
    projects.push(project);
    saveToLocalStorage(projects, "projects");

    // Set the new project as selected
    localStorage.setItem('tempProjectId', newId);
    tempProjectId = newId;

    renderProjects(projects);
    renderTodos(project);
    inputName.value = ''; // Clear input
});

// Add todo functionality
const addTodoBtn = document.querySelector('.add-todo-btn');
let inputTitle = document.querySelector('#todo_title');
let inputDesc = document.querySelector('#todo_desc');
let inputPrio = document.querySelector('#todo_prio');

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const currentTempProjectId = parseInt(localStorage.getItem('tempProjectId'));

    if (!currentTempProjectId || isNaN(currentTempProjectId)) {
        console.warn("No project selected. Please select a project first.");
        return;
    }

    if (!inputTitle.value.trim()) {
        console.warn("Todo title cannot be empty");
        return;
    }

    const todo = new Todo(Date.now(), inputTitle.value, inputDesc.value, inputPrio.value);
    const project = projects.find(p => p.id === currentTempProjectId);

    if (project) {
        project.todos.push(todo);
        saveToLocalStorage(projects, "projects");
        renderProjects(projects);
        renderTodos(project);
        
        // Clear inputs
        inputTitle.value = '';
        inputDesc.value = '';
        inputPrio.value = '';
        
        console.log("Todo added:", todo);
    } else {
        console.warn("Project not found for ID:", currentTempProjectId);
    }
});