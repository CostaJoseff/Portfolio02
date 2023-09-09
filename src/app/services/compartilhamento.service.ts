import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartilhamentoService {
  public corPrincipal: number[];
  public corSecundaria: number[];

  constructor() {
    this.corPrincipal = [238,197,142];
    this.corSecundaria = [255,123,0];
  }

  public getTextoRGBSecundario() {
    return "rgb("+this.corSecundaria[0]+","+this.corSecundaria[1]+","+this.corSecundaria[2]+")";
  }

  public getTextoRGBPrincipal() {
    return 'rgb('+this.corPrincipal[0]+','+this.corPrincipal[1]+','+this.corPrincipal[2]+')';
  }
}
