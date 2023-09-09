import { Component } from '@angular/core';
import { ConhecimentoClicadoService } from '../conhecimento-clicado.service';
import { CompartilhamentoService } from '../../../services/compartilhamento.service';

@Component({
  selector: 'app-conhecimentos-card',
  templateUrl: './conhecimentos-card.component.html',
  styleUrls: ['./conhecimentos-card.component.css']
})
export class ConhecimentosCardComponent {
  public titulo: String;
  public descricao: String;

  constructor(public conheciClicado: ConhecimentoClicadoService
              ,public coresCompartilhadas: CompartilhamentoService
    ) {
    this.titulo = this.conheciClicado.conhecimentoClicado;
    this.descricao = this.conheciClicado.descricao;
  }
}
