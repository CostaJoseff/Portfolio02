import { Component } from '@angular/core';
import { CompartilhamentoService } from '../../services/compartilhamento.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(public coresCompartilhadas: CompartilhamentoService) {
  }
}
