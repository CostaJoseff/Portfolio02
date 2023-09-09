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
  private quantidadeDePontos = 350;
  private velocidadeDosPontos = 0.2;
  private animado = true;

  constructor(private coresCompartilhadas: CompartilhamentoService) {
    this.bgObjet = undefined;
  }
  
  ngOnInit() {
    this.altura = window.innerHeight;
    this.largura = window.innerWidth;
    if (this.largura <= 425 && this.largura > 325) {
      this.quantidadeDePontos = this.quantidadeDePontos/2;
    } else if (this.largura <= 325) {
      this.quantidadeDePontos = this.quantidadeDePontos/4;
    } else {
      this.quantidadeDePontos = 350;
    }

    this.bgObjet = new GraphBackGround(this.altura, this.largura, this.quantidadeDePontos, this.velocidadeDosPontos, this.coresCompartilhadas, this.animado);
    this.resizeObservable = fromEvent(window, 'resize').pipe(debounceTime(200));
    this.resizeObservable.subscribe(() => {
      this.largura= window.innerWidth;
      this.altura = window.innerHeight;
      if (this.largura <= 425 && this.largura > 325) {
        this.quantidadeDePontos = this.quantidadeDePontos/2;
      } else if (this.largura <= 325) {
        this.quantidadeDePontos = this.quantidadeDePontos/4;
      } else {
        this.quantidadeDePontos = 350;
      }
      this.bgObjet = new GraphBackGround(this.altura, this.largura, this.quantidadeDePontos, this.velocidadeDosPontos, this.coresCompartilhadas, this.animado);
    });
  }
}
