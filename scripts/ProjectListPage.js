import ProjectService from "./ProjectService.js";

const projectTableBody = document.getElementById("project-table-body");

class ProjectListPage {
  constructor() {
    this.projectService = new ProjectService();
  }

  init() {
    this.projectService.init().then((status) => {
      console.log(status);
      this.displayList(this.projectService.getProjects());
    });
  }

  displayList(projectList) {
    projectTableBody.innerHTML = ``;
    if (projectList.length > 0) {
      projectList.forEach((project) => {
        projectTableBody.innerHTML += `
        <tr>
          <td>${project.id}</td>
          <td>${project.name}</td>
          <td>${project.revenue}</td>
          <td>${project.isCompleted == true ? "Completed" : "Ongoing"}</td>
          <td><button class="btn btn-danger btn-del-project" 
                    id="${project.id}"><i class="fas fa-trash"></i></button></td>
        </tr>`;
      });
    } else {
      projectTableBody.innerHTML = `<tr class="text-center"><td colspan="5">No projects to Display</td></tr>`;
    }
  }
}


const projectList = new ProjectListPage();
projectList.init();

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  window.location.href = "save.html";
});

const backBtn = document.getElementById("backToDashBtn");
backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and dpne");
  const deleteButton = document.querySelectorAll(".btn-del-project");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("delete project with id", button.id);
      alert(projectList.projectService.deleteProject(button.id));
      window.location.href = "list.html";
    });
  });
});

export default ProjectListPage;
