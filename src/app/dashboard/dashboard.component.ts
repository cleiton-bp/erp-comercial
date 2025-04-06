import { Component } from '@angular/core';

type ImagemPosicao = 'left' | 'right';

interface BlocoTextoImagem {
  imagem: string;
  imagemAlt: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagemPosicao: ImagemPosicao;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
