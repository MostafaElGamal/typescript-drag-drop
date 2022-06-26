import { AppIdsEnum } from "../enums/AppIds.enum";
import { Component } from "./Componnet";

export class ProjectForm extends Component {
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
      });
  }
}
