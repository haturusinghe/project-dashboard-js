import ProjectList from "./ProjectList.js";

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  window.location.href = "add.html";
});

const backBtn = document.getElementById("backToDashBtn");
backBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

const projectList = new ProjectList();

projectList.init();
