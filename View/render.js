// render.js
export function renderProjects(projects) {
    const projectList = document.querySelector(".project-list");
    projectList.innerHTML = "";

    projects.forEach(project => {
        const btn = document.createElement('button');
        btn.innerHTML = project.title;
        btn.classList.add("proj-btn");

        btn.addEventListener('click', () => {
            // Fix: Set the actual project ID in localStorage
            localStorage.setItem('tempProjectId', project.id);
            // Show the todos for this project
            renderTodos(project);
            console.log('Projekt ausgewählt:', project.title);
        });

        projectList.appendChild(btn);
    });
}

export function renderTodos(project) {
    const todoList = document.querySelector(".todo-list");
    todoList.innerHTML = "";

    if (!project.todos || project.todos.length === 0) {
        const empty = document.createElement('div');
        empty.innerText = "Keine Todos vorhanden";
        todoList.appendChild(empty);
        return;
    }

    project.todos.forEach(todo => {
        const btn = document.createElement('div');
        btn.innerHTML = `<strong>${todo.title}</strong><br>${todo.description} (Prio: ${todo.priority})`;
        btn.classList.add("todo-item");
        todoList.appendChild(btn);
    });
}