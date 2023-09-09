import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConhecimentoClicadoService {
  public conhecimentoClicado: String;
  public descricao: String;
  public isOpen: boolean;

  constructor() {
    this.conhecimentoClicado = "";
    this.descricao = "";
    this.isOpen = false;
  }
}
