export abstract class Component {
  templateElement: HTMLTemplateElement;
  targetElement: HTMLElement;

  constructor(templateId: string, targetId: string) {
    this.templateElement = document.getElementById(
      templateId.toString(),
    )! as HTMLTemplateElement;

    this.targetElement = document.getElementById(
      targetId.toString(),
    )! as HTMLElement;
  }

  render(): void {
    this.targetElement.appendChild(
      this.templateElement.content.cloneNode(true),
    );
  }

  renderConfig?(): void;
}
