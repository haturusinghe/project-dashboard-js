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
  console.log("DOM fully loaded and dpne");
  const deleteButton = document.querySelectorAll(".btn-del-project");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("delete project with id", button.id);
      alert(projectList.deleteProject(button.id));
      window.location.href = "list.html";
    });
  });
});
