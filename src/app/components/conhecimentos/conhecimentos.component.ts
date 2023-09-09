import { Component } from '@angular/core';
import { CompartilhamentoService } from '../../services/compartilhamento.service';
import { ConhecimentoClicadoService } from './conhecimento-clicado.service';

@Component({
  selector: 'app-conhecimentos',
  templateUrl: './conhecimentos.component.html',
  styleUrls: ['./conhecimentos.component.css'],
})
export class ConhecimentosComponent {
  public conhecimentos: any[];
  public isOpen: boolean

  constructor(public coresCompartilhadas: CompartilhamentoService
              ,public conhecimentoClicado: ConhecimentoClicadoService
    ) {
    this.conhecimentos = [
      {nome: "Python", url: "assets/imgs/python.png", descricao: "Foi o meu primeiro contato com programação na faculdade, primeiro período, Programação 1. É nesse período onde tudo é iniciado, variáveis, funções, condições, laços. Após o perído, decidi aprender PyGame e entender como funciona um canvas e disso saiu meu primeiro jogo (<3) a replica do Tetris."},
      {nome: "Java", url: "assets/imgs/java.png", descricao: "Segundo período, primeiro contato com Orientação a Objetos, primeiro contato com Java, primeiro 'amor a primeira vista'. A organização POO e o padrão facade foram conteúdos fundamentais para construir meu 'estilo de programar' (inclusive, motivos para ter escolhido angular). Nesse momento da faculdade criamos vários sistemas pequenos sem a parte grafica, para paraticar todos os conceitos basicos de POO."},
      {nome: "Oracle Apex", url: "assets/imgs/oracle-apex.png", descricao: "Periodo? nem lembro mais... Mesmo sem lembrar qual período paguei essa cadeira eu considerei essa cadeira como uma das mais importantes, afinal sem persistencia de dados teríamos grandes problemas no futuro. E estava certo em pensar que era uma cadeira muito importante porque além da persistencia aprendi INUMERAS tecnicas para transformar um BD em um excelente BD. Tecnicas de diagramação, idéias como triggers, views, diversas formas de consulta. Consegui aproveitar muito bem o conteúdo."},
      {nome: "SystemVerilog", url: "assets/imgs/systemverilog.png", descricao: "O amor e não amor, hardware é algo que faz parte da vida de um programador queira ele ou não. A cadeiras de Arquitetura de Software (L/OAC) me trouxeram para esse universo e me fizeram entender como os componentes funcionavam e como a lógica por trás de tudo isso era massa. Aqui eu aprendi lógica booleana e com SystemVerilog implementei alguns circuitos que temos em nosso computador como flip-plop's, registradores, displays de 7 seguimentos e até uma ULA!!. Aqui eu comecei a entender também como era o acesso a ULA e consegui associar isso com a eficiência do código. Atualmente utilizei desse conhecimento para otimizar o background que foi utilizado nesse portfolio."},
      {nome: "Risk-V", url: "assets/imgs/risk-v.png", descricao: "Ahhhh ASSEMBLY, esse monstro assustador que se esconde por trás de TODA linguagem de programação. Foi muito interessante entender a raíz dos codigos e o ponto mais abstrato do binário, entender que foi feito algo para abstrair todo aquele monte de transistors, componentes, 0's e 1's e partindo daquilo, teríamos o que temos hoje. ps: Imaginar que, de acordo com minhas pesquisas, o Prince of Persia (1989) foi feito inteiro em Assembly... que LOUCO."},
      {nome: "HTML", url: "assets/imgs/HTML.png", descricao: "Se voce está vendo esse site é bem provável que esteja vendo por um HTML que criei... probabilidades de 100%. Gracinhas a parte, a vida me obrigou a aprender HTML, precisava de alguma fonte de renda e o Front-End foi quem mostrou ser o alvo para isso, afinal, um portfolio sempre passa uma boa impressão, né? Aqui é o início de tudo, tags, textos, div's, todo o esqueleto do site. Outra coisa que me motivou foi que sempre ficava com vontade de visualizar os programas que eu fazia, tanto que aprendi PYGame para chegar nisso, mas não foi o suficiente. O HTML mostrou que eu conseguiria fazer isso."},
      {nome: "CSS", url: "assets/imgs/CSS.png", descricao: "Aquiiii é onde as coisas começam a brilhar, literalmente. Eu acho uma tarefa MUITO relaxante pegar todo aquele HTML seco e por formas nele (tirando responsividade, eeeita coisinha trabalhosa). Aprendi também animações o que deixa uma imagem MUITO mais profissional e carinhosa ao site."},
      {nome: "JavaScript", url: "assets/imgs/javascript.png", descricao: "Para fechar a trindade Front-End não poderia faltar o melhor amigo de sites com várias funções do que uma linguagem com muitos conteúdos do paradigma Funcional. JS é a porta para dinamicas num site, mas é triste saber que muito do que manipula o HTML não é tão utilizado, pois frameworks (como o Angular, React) disponibilizam coisas que o JS faz sendo esses conteúdos mais indicados e otimizados, tornando assim uma paratica ruim utilizar certos conteúdos do JS (como o document). Não é ruim só é triste."},
      {nome: "Bootstrap", url: "assets/imgs/bootstrap.png", descricao: "O melhor amigo do parazo, Bootstrap, framework (ou biblioteca, aceito os 2) que entrega INÚMEROS componentes para transformar a atividade cansativa de design e responsividade MUITO... MA MUUUUIITO mais rapida. É surreal a quantidade de projetos que utilizam Bootstrap. ps: Decidi não utilizar de bootstrap para ter a experiência completa."},
      {nome: "TypeScript", url: "assets/imgs/typescript.png", descricao: "O 'javaScript de tipo', foi aqui onde tomei gosto pelo Front-End por que conseguiria organizar todo o projeto com POO. Foi com typeScript que repliquei o ParticlesBackGround (disponível em meu GitHub) que é o background animado utilizado neste portfolio."},
      {nome: "Angular", url: "assets/imgs/angular.png", descricao: "Participei de um processo com uma empresa (acredito eu que seja empresa) chamada IUUL que treinou diversas pessoas para um futuro projeot Front-End que seria feito em Angular. Infelizmente, por certos motivos, não pude continuar no projeto, saindo na ultima semana onde nos foi apresentado Angular. Mesmo saíndo consegui adquirir um BOM conhecimento, tanto HTML, CSS, JS e TS foram conteúdos que tive que aprender nesse processo. O angular é incrível, utiliza de POO para deixar tudo incrivelmente mais dinâmico e flexível, sem contar também com o conceito de SPA. ps: Esse portfólio é feito com Angular."}
    ];
    this.isOpen = this.conhecimentoClicado.isOpen;
  }

  public putSombra(tag: any) {
    tag.target.classList.add('sombra');
    const styles = document.documentElement.style;
    styles.setProperty('--cor-dinamica', this.coresCompartilhadas.getTextoRGBSecundario());
  }

  public removeSombra(tag: any) {
    tag.target.classList.remove('sombra');
  }

  public setClicado(cardClicado: any) {
    this.conhecimentoClicado.conhecimentoClicado = cardClicado;
    this.conhecimentos.forEach((conhecimento) => {
      if (conhecimento.nome === cardClicado) {
        this.conhecimentoClicado.descricao = conhecimento.descricao;
      }
    })
    this.conhecimentoClicado.isOpen = true;
  }

  public fechar() {
    this.conhecimentoClicado.isOpen = false;
  }
}
