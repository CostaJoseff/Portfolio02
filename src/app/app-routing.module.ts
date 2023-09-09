import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConhecimentosComponent } from './components/conhecimentos/conhecimentos.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'conhecimentos', component: ConhecimentosComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
