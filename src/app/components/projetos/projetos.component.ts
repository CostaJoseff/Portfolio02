import { Component } from '@angular/core';
import { CompartilhamentoService } from '../../services/compartilhamento.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  public projetos: any[];

  constructor(public coresCompartilhadas: CompartilhamentoService) {
    this.projetos = [
      {nome: 'Visual Sortings', descricao: 'Ao final da cadeira "Estrutura de dados" decidi fazer algo que gostava muito de acompanhar, a visualização dos algoritmos de ordenação, então utilizei do pygame (era o unico que sabia manuzear) para gerar as barrinhas e criar a animação de ordenação.', url : "https://github.com/CostaJoseff/Ordena-oAnimada"},
      {nome: 'RSA', descricao: 'A cadeira de "Fundamentos de matematica pra Computação 2" possuia como uma das notas um projeto em que o professor entregava vários tópicos e tinhamos que fazer um trabalho sobre um deles. Eu, atrevido como sou, decidi fazer sobre criptografia homomorfica, que era área de domínio do professor.', url : "https://github.com/CostaJoseff/Algoritmo-RSA"},
      {nome: 'Tetriz', descricao: 'Final de um dos períodos (acho que o segundo), estava com um pico de criatividade grande, então decidi aprender pygame então repliquei o famoso Tetriz, foi um projeto divertido de fazer e ainda pretendo efetuar melhorias pois ainda era novo nos conteúdos de programação, mas por enquanto é isso. Chamei de TetriZzz por ter feito o projeto enquanto estava entediado.', url : ""},
      {nome: 'Portfolio V1', descricao: 'Esse foi o desafio 1 do "Residencia em Software" que participei, o desafio era produzir um portfolio com HTML, CSS e no desafio seguinte tinhamos que adicionar um formulário com JavaScript. O portfolio não foi continuado porque não está mais no meu agrado, mas mesmo assim não excluí ele, serve de lembrança.', url : "https://github.com/CostaJoseff/IUUL_Desafio_1_Portfolio"},
      {nome: 'Conversor de Moedas', descricao: 'O ultimo contato que tive com a IUUL e seu projeto de Residencia em Software. Nesse desafio tinhamos que aprender angular e aprender sobre consumos de API e após isso desenvolver em angular um conversor de moedas que guardava um histórico de conversões e fazia uma listagem de moédas disponíveis para conversão.', url : "https://github.com/CostaJoseff/IUUL_Desafio_4_Angular_Conversor_de_moedas"},
    ];
  }
}
