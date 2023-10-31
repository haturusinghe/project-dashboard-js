import Project from "./Project.js";

class ProjectService {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  getProjectList(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", "projects.json", true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const jsonData = JSON.parse(xhr.responseText);
        this.projects = jsonData.projects.map((project) => {
          return new Project(project.id, project.name);
        });
        if (callback) {
          callback(this.projects);
      }
      }
    };
    xhr.send(null);
  }
}


export default ProjectService;