import ProjectService from "./ProjectService.js";
import Project from "./Project.js";

const projectService = new ProjectService();

const form = document.querySelector("form");

const backBtn = document.getElementById("backToProjectListBtn");
backBtn.addEventListener("click", () => {
  window.location.href = "list.html";
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectId = document.getElementById("projectId").value;
    const projectName = document.getElementById("projectName").value;
    const revenue = parseFloat(document.getElementById("revenue").value);
    const isCompleted = document.getElementById("isCompleted").checked;
    const newProject = new Project(
      projectId,
      projectName,
      revenue,
      isCompleted
    );
    projectService.init().then((status) => {
        console.log(status);
        projectService.addProject(newProject).then((status) => {
          alert(status);
          window.location.href = "list.html";
        }).catch((error) => {
          alert(error);
        });
      });
  });
});
