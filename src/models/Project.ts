import { AppIdsEnum } from "../enums/AppIds.enum";
import { ProjectStatusEnum } from "../enums/ProjectStatus.enum";
import { ProjectInterface } from "../interfaces/Project.interface";
import { Component } from "./Componnet";

export class Project extends Component {
  project: ProjectInterface;

  get projectListName(): string {
    return this.project.status == ProjectStatusEnum.active
      ? AppIdsEnum.activeProject
      : AppIdsEnum.finishedProjects;
  }

  constructor(name: string, status: ProjectStatusEnum) {
    const projectListName =
      status == ProjectStatusEnum.active
        ? AppIdsEnum.activeProject
        : AppIdsEnum.finishedProjects;

    super(AppIdsEnum.projectItem, projectListName);

    this.project = {
      name,
      status,
      id: Math.random(),
    };

    this.renderConfig();
    this.render();
  }

  renderConfig(): void {
    const liElement = this.templateElement.content.querySelector("li");
    const pElement = this.templateElement.content.querySelector("p");

    liElement!.id = this.project.id.toString();
    pElement!.innerHTML = this.project.name;
  }
}
