export function renderProjects(projects) {
    const projectList = document.querySelector(".project-list");
    projectList.innerHTML = "";

    projects.forEach(project => {
        const btn = document.createElement('button');
        btn.innerHTML = project.title;
        btn.addEventListener('click', () => {
            console.log('The div was clicked! render.js');
          });
        btn.classList.add("proj-btn");
        projectList.appendChild(btn);
    });

}

export function renderTodos(projects) {
    const todoList = document.querySelector(".todo-list");
    projectList.innerHTML = "";

    projects.forEach(project => {
        project.todos(todo => {
            const btn = document.createElement('button');
            btn.innerHTML = todo.title;
            btn.addEventListener('click', () => {
                console.log('The div was clicked! render.js');
              });
            btn.classList.add("btn-div");
            todoList.appendChild(btn);
        });
    });

}