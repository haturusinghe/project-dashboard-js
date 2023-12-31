import ProjectService from "./ProjectService.js";

const topProjectsWidgetBody = document.getElementById(
  "top-projects-widget-body"
);

const projectService = new ProjectService();

function init() {
  projectService.init().then((status) => {
    console.log(status);

    const topProjects = projectService.getTopProjectsByRevenue(3);
    if (topProjects.length > 0) {
      displayTopProjects(topProjects);
    } else {
      topProjectsWidgetBody.innerHTML = ``;
      topProjectsWidgetBody.innerHTML = `
      <div class="card empty-card">
        <div class="card-body"> 
          <h6>Nothing to display here</h6>
        </div>
      </div>`;
    }

    const completedProjects = projectService.getCompletedProjects();
    if (completedProjects.length > 0) {
      alertCompletedProjects(completedProjects);
    }
  });
}

init();

function alertCompletedProjects(projectList) {
  console.log(projectList);
  let completedPr = `The following projects have been completed: \n`;
  projectList.forEach((project) => {
    // alert(`Project with ID${project.id} and Name:${project.name} is Completed!`)
    completedPr += `\t Project ID : ${project.id} Name: ${project.name} \n`;
  });
  alert(completedPr);
}

function displayTopProjects(projectList) {
  topProjectsWidgetBody.innerHTML = ``;
  console.log(projectList);
  projectList.forEach((project) => {
    topProjectsWidgetBody.appendChild(createTopProjectCard(project));
  });
}

function createTopProjectCard(project) {
  const card = document.createElement("div");
  card.className = "card top-project-card";
  card.innerHTML = `
  <div class="card-body">
  <h6 class="card-title">${project.name}</h6>
  <h6 class="card-subtitle mb-2 text-muted">
      Rs. ${project.revenue} 
  </h6>
  </div>`;
  return card;
}

document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("backToProjectListBtn");
  backBtn.addEventListener("click", () => {
    window.location.href = "list.html";
  });
});
