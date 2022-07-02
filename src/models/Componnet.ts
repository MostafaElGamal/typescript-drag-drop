export abstract class Component<T extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  targetElement: HTMLElement;
  element: T;

  constructor(templateId: string, targetId: string) {
    this.templateElement = document.getElementById(
      templateId.toString(),
    )! as HTMLTemplateElement;

    this.targetElement = document.getElementById(
      targetId.toString(),
    )! as HTMLElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );
    this.element = <T>importedNode.firstElementChild;
  }

  render(): void {
    this.targetElement.appendChild(this.element);
  }

  renderConfig?(): void;
}
