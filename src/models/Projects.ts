import { AppIdsEnum } from "../enums/AppIds.enum";
import { Component } from "./Componnet";
import { Project } from "./Project";
import { ProjectStatusEnum } from "../enums/ProjectStatus.enum";

export class Projects extends Component {
  projects: Project[];

  constructor() {
    super(AppIdsEnum.projects, AppIdsEnum.app);
    this.render();
  }

  createProject(name: string) {
    const newProject = new Project(name, ProjectStatusEnum.active);
    this.projects.push(newProject);
  }
}
