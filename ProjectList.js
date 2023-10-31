import ProjectService from "./ProjectService.js";

const projectTableBody = document.getElementById("project-table-body");

class ProjectList {
  constructor() {
    this.projectService = new ProjectService();
  }

  init() {
    this.projectService.getProjectList((projectList) => {
      console.log(projectList);
      this.displayList(projectList);
    });
  }

  displayList(projectList) {
    projectTableBody.innerHTML = ``;
    if (projectList.length > 0) {
      projectList.forEach((project) => {
        projectTableBody.innerHTML += `<tr><td>${project.id}</td><td>${project.name}</td><td>${project.revenue}</td><td>${project.isCompleted == true ? "Completed" : "Ongoing"}</td></tr>`;
      });
    } else {
      projectTableBody.innerHTML = `<tr class="text-center"><td colspan="4">No projects found</td></tr>`;
    }
  }

  displayMessage() {}
}

export default ProjectList;
