import { DragableTarget } from "./../interfaces/Dragable.interface";
import { AppIdsEnum } from "../enums/AppIds.enum";
import { Component } from "./Componnet";

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
    // this.renderConfig();
  }

  renderConfig(): void {
    this.activeProjectsEle.addEventListener("dargover", this.onDragOver, false);
    this.activeProjectsEle.addEventListener("dargleave", this.onDragLeave);
    this.activeProjectsEle.addEventListener("drop", this.onDrop);

    this.finishedProjectsEle.addEventListener(
      "dargover",
      this.onDragOver,
      false,
    );
    this.finishedProjectsEle.addEventListener("dargleave", this.onDragLeave);
    this.finishedProjectsEle.addEventListener("drop", this.onDrop);
  }

  onDragOver(e: DragEvent): void {
    console.log("dragOver", e);
  }
  onDragLeave(e: DragEvent): void {
    console.log("dragLeave", e);
  }
  onDrop(e: DragEvent): void {
    console.log("drop", e);
  }
}
