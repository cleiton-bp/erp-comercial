import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-block-component',
  templateUrl: './image-text-block-component.component.html',
})
export class ImageTextBlockComponentComponent {
  @Input() titulo: string = 'Título padrão';
  @Input() subtitulo: string = 'Subtítulo padrão';
  @Input() descricao: string = 'Descrição padrão para o componente.';

  @Input() imagemPosicao: 'left' | 'right' = 'left';
  @Input() imagem: string = 'assets/imagens/produtividade.png';
  @Input() imagemAlt: string = 'Imagem padrão';

  // Converter markdown simples: **negrito**
  formatarMarkdown(texto: string): string {
    if (!texto) return '';
    return texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
}
