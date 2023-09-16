import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { GraphBackGround } from '../../../assets/ts/GraphBackGround';
import { CompartilhamentoService } from '../../services/compartilhamento.service';

@Component({
  selector: 'app-bg-canva',
  templateUrl: './bg-canva.component.html',
  styleUrls: ['./bg-canva.component.css']
})
export class BgCanvaComponent {
  private bgObjet: any;
  private resizeObservable: any;
  private altura: any;
  private largura: any;
  private quantidadeDePontos = 200;
  private velocidadeDosPontos = 0.2;
  private animado = true;

  constructor(private coresCompartilhadas: CompartilhamentoService) {
    this.bgObjet = undefined;
  }
  
  ngOnInit() {
    this.altura = window.innerHeight;
    this.largura = window.innerWidth;

    this.bgObjet = new GraphBackGround(this.altura, this.largura, this.quantidadeDePontos, this.velocidadeDosPontos, this.coresCompartilhadas, this.animado);
    this.resizeObservable = fromEvent(window, 'resize').pipe(debounceTime(200));
    this.resizeObservable.subscribe(() => {
      const divArea = document.getElementById("canvasArea") as HTMLDivElement;
      const canvasAntigo = document.getElementById("background") as HTMLCanvasElement; 
      const novoCanvas = document.createElement("canvas");
      novoCanvas.id = "background";
      novoCanvas.classList.add("background");
      divArea.removeChild(canvasAntigo);
      divArea.appendChild(novoCanvas);
      this.altura = window.innerHeight;
      this.largura = window.innerWidth;
      this.bgObjet = new GraphBackGround(window.innerHeight, window.innerWidth, this.quantidadeDePontos, this.velocidadeDosPontos, this.coresCompartilhadas, this.animado);
    });
  }
}
