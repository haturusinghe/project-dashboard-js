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
