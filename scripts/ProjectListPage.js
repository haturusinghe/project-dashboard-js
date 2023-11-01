import ProjectService from "./ProjectService.js";

const projectTableBody = document.getElementById("project-table-body");
const projectService = new ProjectService();

function init() {
  projectService.init().then((status) => {
    console.log(status);
    displayList(projectService.getProjects());
  });
}

function displayList(projectList) {
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
                  id="${project.id}">Delete</button></td>
      </tr>`;
    });
  } else {
    projectTableBody.innerHTML = `<tr class="text-center"><td colspan="5">No projects to Display</td></tr>`;
  }
}

init()

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  window.location.href = "save.html";
});

const backBtn = document.getElementById("backToDashBtn");
backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.querySelectorAll(".btn-del-project");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("delete project with id", button.id);
      alert(projectService.deleteProject(button.id));
      window.location.href = "list.html";
    });
  });
});

