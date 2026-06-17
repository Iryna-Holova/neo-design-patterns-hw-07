import { DocNode } from '../interfaces/DocNode';
import { DocRenderer } from '../interfaces/DocRenderer';

export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1,
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    const renderedTitle = this.renderer.renderHeader(this.level, this.title);
    const renderedChildren = this.children
      .map((child) => child.render())
      .filter((content) => content.length > 0)
      .join('\n\n');
    return renderedChildren.length > 0
      ? `${renderedTitle}\n\n${renderedChildren}`
      : renderedTitle;
  }
}
