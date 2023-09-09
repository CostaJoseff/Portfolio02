import { Component } from '@angular/core';
import { CompartilhamentoService } from '../../services/compartilhamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public navBar: any[];
  public inputCorPrimaria: any;
  public inputCorSecundaria: any;

  constructor(public coresCompartilhadas: CompartilhamentoService,
              private router: Router) {
    this.navBar = [["Início", true, '', '../../../assets/icons/home.png'], ["Conhecimentos", false, '/conhecimentos', '../../../assets/icons/conhecimentos.png'], ["Projetos", false, '/projetos', '../../../assets/icons/projetos.png'], ["Contato", false, '/contato', '../../../assets/icons/contato.png']];
    setTimeout(() => {
      const rotaAtual = this.router.url.split("/")[1];
      
      this.navBar.forEach((elemento) => {
        if (rotaAtual == "" && elemento[0] == "Início") {
          elemento[1] = true;
        } else if (rotaAtual.includes(elemento[0].toLowerCase())) {
          elemento[1] = true;
        } else {
          elemento[1] = false;
        }
        
      })
    }, 500);
  }

  public alterarFoco(evento: any) {
    const tag = evento.srcElement;
    
    if (tag.nodeName == "LI") {
      this.navBar.forEach((botao) => {
        if (botao[0] == evento.target.textContent.trim()) {
          botao[1] = true;
        } else {
          botao[1] = false;
        }
      });
    } else {
      this.navBar.forEach((botao) => {
        if (tag.alt == botao[2]) {
          botao[1] = true;
        } else {
          botao[1] = false;
        }
      })
    }
  }

  public setCorPrincipal(tag: any) {
    this.coresCompartilhadas.corPrincipal = this.converterHex(tag.target.value);
  }

  public setCorSecundaria(tag: any) {
    this.coresCompartilhadas.corSecundaria = this.converterHex(tag.target.value);
  }

  private converterHex(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }
}
