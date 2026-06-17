import { BaseRenderer } from './BaseRenderer';

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const underlineChar = level === 1 ? '=' : '-';
    return `${text}\n${underlineChar.repeat(text.length)}`;
  }

  renderParagraph(text: string): string {
    return text.trim();
  }

  renderList(items: string[]): string {
    return items.map((item) => `* ${item}`).join('\n');
  }
}
