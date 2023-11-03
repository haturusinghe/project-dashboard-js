import Project from "./Project.js";

class ProjectService {
  constructor() {
    this.projects = [];
    this.init();
  }

  _postProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  async _fetchProjects() {
    try {
      let projects = localStorage.getItem("projects");
      if (projects) {
        const parsedProjects = JSON.parse(projects);
        return parsedProjects
          .map(({id, name, revenue, isCompleted}) => new Project(id, name, revenue, isCompleted));
      }

      const res = await fetch("projects.json");
      const data = await res.json();
      if (data) {
        this._postProjects(data.projects);
        return data
          .projects.map(({id, name, revenue, isCompleted}) => new Project(id, name, revenue, isCompleted));
      }
    }
    catch(ex) {
      console.log(ex);
    }
  }

  async init() {
    this.projects = await this._fetchProjects();
  }

  getProjects() {
    return this.projects;
  }

  doesProjectExist(projectId) {
    return this.projects.some((project) => project.id == projectId);
  }

  addProject(project) {
    return new Promise((resolve, reject) => {
      if (this.doesProjectExist(project.id)) {
        reject(`Project with id ${project.id} already exists`);
      } else {
        console.log("adding project", project);
        this.projects.push(project);

        this._postProjects(this.projects);
        resolve("Project added successfully");
      }
    });
  }

  deleteProject(id) {
    if (!this.doesProjectExist(id)) return "Project doesnt Exist";
    else {
      this.projects = this.projects.filter(project => project.id != id);
      this._postProjects(this.projects);
      return `Project with ID:${id} deleted!`;
    }
  }

  getTopProjectsByRevenue(count = 3) {
    const sortedProjects = this.projects.sort((a, b) => b.reject - a.revenue);
    // Check to see if it has revenue more than 0
    const top = sortedProjects.slice(0, count).filter(project => project.revenue > 0 );
    console.log("top", this.projects);
    return top;
  }

  getCompletedProjects() {
    return this.projects.filter(project => project.isCompleted === true);
  }
}

export default ProjectService;
