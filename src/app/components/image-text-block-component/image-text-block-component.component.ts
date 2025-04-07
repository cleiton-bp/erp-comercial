import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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

  @ViewChild('imagemElemento') imagemRef!: ElementRef<HTMLImageElement>;

  handleMouseMove(event: MouseEvent) {
    const image = this.imagemRef.nativeElement;
    const bounds = image.getBoundingClientRect();

    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  resetImagePosition() {
    const image = this.imagemRef.nativeElement;
    image.style.transform = 'translate(0, 0)';
  }

  formatarMarkdown(texto: string): string {
    if (!texto) return '';
    return texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
}
