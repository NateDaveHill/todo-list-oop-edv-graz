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
        btn.innerHTML = 
        `<h1>
        ${todo.title}
        </h1>
        <br>
        ${todo.description} 
        <br> 
        <select name="todo_prio_select" id="todo_prio">
                        <option value="high" ${todo.priority === "high" ? "selected" : ""}>high</option>
                        <option value="medium" ${todo.priority === "medium" ? "selected" : ""}>medium</option>
                        <option value="low" ${todo.priority === "low" ? "selected" : ""}>low</option>
                      </select>`;
        btn.classList.add("todo-item");
        todoList.appendChild(btn);
    });
}