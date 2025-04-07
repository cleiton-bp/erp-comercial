import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eap',
  templateUrl: './eap.component.html',
  styleUrl: './eap.component.css',
})
export class EapComponent {
  zoom: number = 1;
  translateX: number = 0;
  translateY: number = 0;

  containerWidth = 0;
  containerHeight = 0;
  imageWidth = 0;
  imageHeight = 0;

  isDragging = false;
  dragStartX = 0;
  dragStartY = 0;
  startTranslateX = 0;
  startTranslateY = 0;

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

    const container = this.containerRef.nativeElement.getBoundingClientRect();
    this.containerWidth = container.width;
    this.containerHeight = container.height;
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.1 : -0.1;
    const newZoom = Math.min(Math.max(this.zoom + delta, 1), 3);

    const factor = newZoom / this.zoom;
    this.translateX *= factor;
    this.translateY *= factor;

    this.zoom = newZoom;
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.startTranslateX = this.translateX;
    this.startTranslateY = this.translateY;
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;

    const dx = event.clientX - this.dragStartX;
    const dy = event.clientY - this.dragStartY;

    let newX = this.startTranslateX + dx;
    let newY = this.startTranslateY + dy;

    const scaledWidth = this.containerWidth * this.zoom;
    const scaledHeight = this.containerHeight * this.zoom;

    const maxX = (scaledWidth - this.containerWidth) / 2;
    const maxY = (scaledHeight - this.containerHeight) / 2;

    this.translateX = Math.max(-maxX, Math.min(newX, maxX));
    this.translateY = Math.max(-maxY, Math.min(newY, maxY));
  }
}
