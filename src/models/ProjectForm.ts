import { projectsState } from "./ProjectState";
import { AppIdsEnum } from "../enums/AppIds.enum";
import { Component } from "./Componnet";

export class ProjectForm extends Component<HTMLFormElement> {
  constructor() {
    super(AppIdsEnum.projectForm, AppIdsEnum.app);

    this.render();
    this.renderConfig();
  }

  renderConfig(): void {
    document
      .getElementById(AppIdsEnum.addProjectForm)
      .addEventListener("submit", (e: Event) => {
        e.preventDefault();
        const form = <HTMLFormElement>e.target;
        const projectName = form.querySelector("input")!.value;
        projectsState.createProject(projectName);
        form.reset();
      });
  }
}
