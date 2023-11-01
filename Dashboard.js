import ProjectService from "./ProjectService.js";

const topProjectsWidgetBody = document.getElementById(
  "top-projects-widget-body"
);

class Dashboard {
  constructor() {
    this.projectService = new ProjectService();
  }

  init() {
    this.projectService.init().then((status) => {
      console.log(status);
      this.displayTopProjects(this.projectService.getTopProjectsByRevenue(3));
      const completedProjects = this.projectService.getCompletedProjects();
      if(completedProjects.length > 0){
        this.alertCompletedProjects(completedProjects);
      }else{
        topProjectsWidgetBody.innerHTML = ``;
        topProjectsWidgetBody.innerHTML = `
        <div class="card empty-card">
          <div class="card-body"> 
            <h6>Nothing to display here</h6>
          </div>
        </div>`
        ;
      }
    });
  }

  alertCompletedProjects(projectList) {
    console.log(projectList);
    let completedPr = `The following projects have been completed: \n`;
    projectList.forEach((project) => {
      // alert(`Project with ID${project.id} and Name:${project.name} is Completed!`)
      completedPr += `\t Project ID : ${project.id} Name: ${project.name} \n`;
    });
    alert(completedPr);
  }

  displayTopProjects(projectList) {
    topProjectsWidgetBody.innerHTML = ``;
    console.log(projectList);
    projectList.forEach((element) => {
      topProjectsWidgetBody.appendChild(this.createTopProjectCard(element));
    });
  }

  createTopProjectCard(project) {
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
}

export default Dashboard;
