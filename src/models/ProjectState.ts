import { ProjectStatusEnum } from "./../enums/ProjectStatus.enum";
import { Project } from "./Project";

class ProjectsState {
  projects: Project[] = [];
  private static instance: ProjectsState;

  constructor() {
    this.projects = [];
  }

  public static getInstance(): ProjectsState {
    if (!ProjectsState.instance) ProjectsState.instance = new ProjectsState();
    return ProjectsState.instance;
  }

  createProject(name: string) {
    const newProject = new Project(name, ProjectStatusEnum.active);
    this.projects.push(newProject);
  }

  deleteProject(projectId: number | string): void {
    this.projects = this.projects.filter((prj) => prj.project.id != projectId);
    document.getElementById(projectId.toString()).remove();
  }

  changeProjectStatus(projectId: string, status: ProjectStatusEnum): void {
    this.projects = this.projects.filter((prj) => {
      if (prj.project.id == projectId) {
        prj.project.status = status;
      }
      return prj;
    });
  }
}

export const projectsState = ProjectsState.getInstance();
