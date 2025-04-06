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
export class DashboardComponent {
  blocos: BlocoTextoImagem[] = [
    {
      imagem: '../../assets/erp-comercial/aumento-produtividade.webp',
      imagemAlt: 'Produtividade',
      titulo: 'Produtividade',
      subtitulo: '**Otimize suas tarefas diárias**',
      descricao:
        'Com o Domus-ERP, sua equipe trabalha com mais foco e resultados.',
      imagemPosicao: 'left',
    },
    {
      imagem: '../../assets/erp-comercial/aumento-produtividade.webp',
      imagemAlt: 'Eficiência',
      titulo: 'Eficiência Operacional',
      subtitulo: '**Tecnologia inteligente para sua operação**',
      descricao:
        'Tenha controle e fluidez nos seus processos com nosso sistema leve.',
      imagemPosicao: 'right',
    },
  ];
}
