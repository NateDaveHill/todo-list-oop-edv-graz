export function renderProjects(projects) {
    const projectList = document.querySelector(".project-list");
    projectList.innerHTML = "";

    projects.forEach(project => {
        const btn = document.createElement('button');
        btn.innerHTML = project.title;
        btn.addEventListener('click', () => {
            console.log('The div was clicked!');
          });
        btn.classList.add("proj-btn");
        projectList.appendChild(btn);
    });

}