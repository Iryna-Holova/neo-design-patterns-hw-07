import { BaseRenderer } from './BaseRenderer';

export class HTMLRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return `<h${level}>${this.escape(text)}</h${level}>`;
  }
  renderParagraph(text: string): string {
    return `<p>${this.escape(text)}</p>`;
  }
  renderList(items: string[]): string {
    return `<ul>\n  ${items.map((item) => `<li>${this.escape(item)}</li>`).join('\n  ')}\n</ul>`;
  }

  wrapDocument(content: string): string {
    const bodyContent = content
      .split('\n')
      .filter((line) => line.trim().length > 0)
      .map((line) => `    ${line}`)
      .join('\n');

    return `<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
${bodyContent}
  </body>
</html>`;
  }
}
