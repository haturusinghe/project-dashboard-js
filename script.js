import ProjectList from "./ProjectList.js";

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  window.location.href = "add.html";
});

const backBtn = document.getElementById("backToDashBtn");
backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

const projectList = new ProjectList();

projectList.init();

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const deleteButton = document.querySelectorAll(".btn-danger");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("delete project with id", button.id);
      alert(projectList.deleteProject(button.id));
      window.location.href = "list.html";
    });
  });
});
