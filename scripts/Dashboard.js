import ProjectService from "./ProjectService.js";

const backBtn = document.getElementById("backToProjectListBtn");
const topProjectsWidgetBody = document.getElementById(
  "top-projects-widget-body"
);

const projectService = new ProjectService();

function init() {
  projectService.init();

  const topProjects = projectService.getTopProjectsByRevenue(3);
  displayTopProjects(topProjects);

  const completedProjects = projectService.getCompletedProjects();
  alertCompletedProjects(completedProjects);
}

function alertCompletedProjects(projectList) {
  if (projectList.length > 0) {
    let completedPr = `The following projects have been completed: \n`;
    projectList.forEach((project) => {
      // alert(`Project with ID${project.id} and Name:${project.name} is Completed!`)
      completedPr += `\t Project ID : ${project.id} Name: ${project.name} \n`;
    });
    alert(completedPr);
  }
}

function displayTopProjects(projectList) {
  if (projectList.length > 0) {
    topProjectsWidgetBody.innerHTML = ``;
    console.log(projectList);
    projectList.forEach((project) => {
      topProjectsWidgetBody.appendChild(createTopProjectCard(project));
    });
  } else {
    topProjectsWidgetBody.innerHTML = `
      <div class="card empty-card">
        <div class="card-body"> 
          <h6>Nothing to display here</h6>
        </div>
      </div>`;
  }
}

function createTopProjectCard(project) {
  const card = document.createElement("div");
  card.className = "card top-project-card";
  card.innerHTML = `
  <div class="card-body">
  <h6 class="card-title">${project.name}</h6>
  <h6 class="card-subtitle">
      Rs. ${project.revenue} 
  </h6>
  </div>`;
  return card;
}

backBtn.addEventListener("click", () => {
  window.location.href = "list.html";
});

init();
