import ProjectService from "./ProjectService.js";

const topProjectsWidgetBody = document.getElementById(
  "top-projects-widget-body"
);

class Dashboard {
  constructor() {
    this.topProjects = [];
    this.projectService = new ProjectService();
  }

  init() {
    this.projectService.init().then((status) => {
      console.log(status);
      this.displayTopProjects(this.projectService.getTopProjectsByRevenue(3));
    });
  }

  displayTopProjects(projectList) {
    topProjectsWidgetBody.innerHTML = ``;
    console.log(projectList);
    projectList.forEach((element) => {
      topProjectsWidgetBody.appendChild(this.createCard(element));
    });
  }

  createCard(project) {
    const card = document.createElement("div");
    card.className = "card sample-card";
    card.innerHTML = `
    <div class="card-body">
    <h6 class="card-title">${project.name}</h6>
    <h6 class="card-subtitle mb-2 text-muted">
        Project ID: ${project.id}
    </h6>
    </div>`;
    return card;
  }
}

export default Dashboard;
