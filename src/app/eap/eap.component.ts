import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eap',
  templateUrl: './eap.component.html',
  styleUrl: './eap.component.css',
})
export class EapComponent {
  zoom: number = 1;
  mouseX: number = 0;
  mouseY: number = 0;
  translateX: number = 0;
  translateY: number = 0;

  imageWidth = 0;
  imageHeight = 0;
  containerWidth = 0;
  containerHeight = 0;

  @ViewChild('imageContainer') containerRef!: ElementRef;
  @ViewChild('imageElement') imageRef!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    const container = this.containerRef.nativeElement.getBoundingClientRect();
    this.containerWidth = container.width;
    this.containerHeight = container.height;
  }

  onImageLoad() {
    const image = this.imageRef.nativeElement;
    this.imageWidth = image.naturalWidth;
    this.imageHeight = image.naturalHeight;

    // Atualiza o tamanho do container
    const container = this.containerRef.nativeElement.getBoundingClientRect();
    this.containerWidth = container.width;
    this.containerHeight = container.height;
  }

  onMouseMove(event: MouseEvent) {
    const container = this.containerRef.nativeElement.getBoundingClientRect();
    this.mouseX = event.clientX - container.left;
    this.mouseY = event.clientY - container.top;
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.1 : -0.1;
    const newZoom = Math.min(Math.max(this.zoom + delta, 1), 3); // entre 1x e 3x

    const factor = newZoom / this.zoom;
    const container = this.containerRef.nativeElement.getBoundingClientRect();
    const offsetX = event.clientX - container.left;
    const offsetY = event.clientY - container.top;

    let newTranslateX = (this.translateX - offsetX) * factor + offsetX;
    let newTranslateY = (this.translateY - offsetY) * factor + offsetY;

    // Cálculo do tamanho visível da imagem
    const scaledWidth = this.containerWidth * newZoom;
    const scaledHeight = this.containerHeight * newZoom;

    const maxTranslateX = (scaledWidth - this.containerWidth) / 2;
    const maxTranslateY = (scaledHeight - this.containerHeight) / 2;

    newTranslateX = Math.max(
      -maxTranslateX,
      Math.min(newTranslateX, maxTranslateX)
    );
    newTranslateY = Math.max(
      -maxTranslateY,
      Math.min(newTranslateY, maxTranslateY)
    );

    this.translateX = newTranslateX;
    this.translateY = newTranslateY;
    this.zoom = newZoom;
  }
}
