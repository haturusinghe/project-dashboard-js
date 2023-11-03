import Project from "./Project.js";

class ProjectService {
  constructor() {
    this.projects = [];
  }

  async init() {
    // Check if there are projects in LocalStorage
    const localProjects = localStorage.getItem("projects");

    if (localProjects) {
      this.projects = JSON.parse(localProjects).map((project) => {
        return new Project(
          project.id,
          project.name,
          project.revenue,
          project.isCompleted
        );
      });
      return "Project Service loaded (data in localStorage)";
    } else {
      try {
        // Load projects from json file and store them in localStorage
        const response = await fetch("projects.json");
        if (!response.ok) {
          throw new Error("Cannot read json file " + response.status);
        }
        const jsonData = await response.json();
        this.projects = jsonData.projects.map((project) => {
          return new Project(
            project.id,
            project.name,
            project.revenue,
            project.isCompleted
          );
        });
        localStorage.setItem("projects", JSON.stringify(jsonData.projects));
        return "Project Service loaded";
      } catch (error) {
        console.error(error);
        throw new Error("Failed to load projects: " + error.message);
      }
    }
  }

  getProjects() {
    return this.projects;
  }

  doesProjectExist(projectId) {
    return this.projects.some((project) => project.id == projectId);
  }

  addProject(project) {
    if (this.doesProjectExist(project.id)) {
      console.error(`Project with id ${project.id} already exists`);
      return `Project with id ${project.id} already exists`;
    } else {
      console.log("Adding project", project);
      this.projects.push(project);
      localStorage.setItem("projects", JSON.stringify(this.projects));
      return "Project added successfully";
    }
  }

  deleteProject(id) {
    if (!this.doesProjectExist(id)) {
      return "Project doesnt Exist";
    } else {
      this.projects = this.projects.filter((project) => {
        return project.id != id;
      });
      localStorage.setItem("projects", JSON.stringify(this.projects));
      return `Project with ID:${id} deleted!`;
    }
  }

  getTopProjectsByRevenue(count = 3) {
    return this.projects
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, count)
      .filter((project) => {
        // Check to see if it has revenue more than 0
        return project.revenue > 0;
      });
  }

  getCompletedProjects() {
    return this.projects.filter((project) => {
      if (project.isCompleted == true) {
        return project;
      }
    });
  }
}

export default ProjectService;
