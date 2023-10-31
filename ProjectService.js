import Project from "./Project.js";

class ProjectService {
  constructor() {
    this.projects = [];
  }

  init() {
    //Check if there are projects in LocalStorage
    if (localStorage.getItem("projects")) {
      this.projects = JSON.parse(localStorage.getItem("projects")).map(
        (project) =>
          new Project(
            project.id,
            project.name,
            project.revenue,
            project.isCompleted
          )
      );
      return Promise.resolve("Project Service Initialized (data in localStorag)");
    } else {
      // Load projects from json file and store them in localStorage
      return fetch("projects.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Cannot read json file error " + response.status);
          }
          return response.json();
        })
        .then((jsonData) => {
          this.projects = jsonData.projects.map(
            (project) =>
              new Project(
                project.id,
                project.name,
                project.revenue,
                project.isCompleted
              )
          );
          localStorage.setItem("projects", JSON.stringify(jsonData.projects));
          return "Project Service Initialized";
        });
    }
  }

  getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  doesProjectExist(projectId) {
    return this.projects.some((project) => project.id == projectId);
  }

  addProject(project) {
    if(this.doesProjectExist(project.id)){
      throw new Error(`Project with id ${project.id} already exists`);
    }else{
      console.log("adding project", project);
      this.projects.push(project);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    }

  }

  getTopProjectsByRevenue(count = 3) {
    return this.projects.sort((a, b) => b.revenue - a.revenue).slice(0, count);
  }
}

export default ProjectService;
