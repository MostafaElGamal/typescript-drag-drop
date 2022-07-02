import { projectsState } from "./ProjectState";
import { DragableTarget } from "./../interfaces/Dragable.interface";
import { AppIdsEnum } from "../enums/AppIds.enum";
import { Component } from "./Componnet";
import { ProjectStatusEnum } from "../enums/ProjectStatus.enum";

export class ProjectsList
  extends Component<HTMLUListElement>
  implements DragableTarget
{
  get activeProjectsEle(): HTMLUListElement {
    return this.element.querySelector(
      `#${AppIdsEnum.activeProject}`,
    ) as HTMLUListElement;
  }

  get finishedProjectsEle(): HTMLUListElement {
    return this.element.querySelector(
      `#${AppIdsEnum.finishedProjects}`,
    ) as HTMLUListElement;
  }

  constructor() {
    super(AppIdsEnum.projects, AppIdsEnum.app);
    this.render();
    this.renderConfig();
  }

  renderConfig(): void {
    this.activeProjectsEle.addEventListener("dragover", this.onDragOver);
    this.activeProjectsEle.addEventListener("dragleave", this.onDragLeave);
    this.activeProjectsEle.addEventListener("drop", this.onDrop);

    this.finishedProjectsEle.addEventListener("dragover", this.onDragOver);
    this.finishedProjectsEle.addEventListener("dragleave", this.onDragLeave);
    this.finishedProjectsEle.addEventListener("drop", this.onDrop);
  }

  onDragOver(e: DragEvent): void {
    e.preventDefault();
  }
  onDragLeave(e: DragEvent): void {
    e.preventDefault();
  }
  onDrop(e: DragEvent): void {
    e.preventDefault();
    const projectId = e.dataTransfer.getData("projectId");
    const projectStatus = e.dataTransfer.getData(
      "projectStatus",
    ) as ProjectStatusEnum;

    projectsState.changeProjectStatus(
      projectId,
      projectStatus == ProjectStatusEnum.active
        ? ProjectStatusEnum.finished
        : ProjectStatusEnum.active,
    );
  }
}
