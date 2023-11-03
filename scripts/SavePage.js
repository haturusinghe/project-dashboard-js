import ProjectService from "./ProjectService.js";
import Project from "./Project.js";

const form = document.querySelector("form");
const backBtn = document.getElementById("backToProjectListBtn");

const projectService = new ProjectService();

function init() {
  projectService.init();
}

backBtn.addEventListener("click", () => {
  window.location.href = "list.html";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const projectId = document.getElementById("projectId").value;
  const projectId = Math.floor(Math.random() * 1000);
  const projectName = document.getElementById("projectName").value;
  const revenue = parseFloat(document.getElementById("revenue").value);
  // const isCompleted = document.getElementById("isCompleted").checked;
  const newProject = new Project(projectId, projectName, revenue);

  const statusMsg = projectService.addProject(newProject);
  alert(statusMsg);

  window.location.href = "list.html";
});

init();
