import { DragableItem } from "./../interfaces/Dragable.interface";
import { AppIdsEnum } from "../enums/AppIds.enum";
import { ProjectStatusEnum } from "../enums/ProjectStatus.enum";
import { ProjectInterface } from "../interfaces/Project.interface";
import { Component } from "./Componnet";
import { projectsState } from "./ProjectState";

function AutoBind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  return {
    configurable: true,
    enumerable: true,
    get() {
      return descriptor.value.bind(this);
    },
  };
}
export class Project extends Component<HTMLLIElement> implements DragableItem {
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

    if (name) {
      this.project = {
        name,
        status,
        id: Math.random(),
      };
      this.renderConfig();
      this.render();
      this.addDeleteEvent();
      this.addDragEvent();
    } else {
      alert("Please Add Project Name");
    }
  }

  addDeleteEvent(): void {
    const btnEle = this.element.querySelector("button");
    btnEle.addEventListener("click", () =>
      projectsState.deleteProject(this.project.id),
    );
  }

  addDragEvent(): void {
    this.element.addEventListener("dragstart", this.onDragStart);
    this.element.addEventListener("dragend", this.onDragEnd);
  }

  @AutoBind
  onDragStart(e: DragEvent): void {
    e.dataTransfer.setData("text", this.project.id.toString());
  }

  onDragEnd(e: DragEvent): void {
    console.log(e, "DragEnd");
  }

  renderConfig(): void {
    const pElement = this.element.querySelector("p");

    this.element!.id = this.project.id.toString();
    pElement!.innerHTML = this.project.name;
  }
}
