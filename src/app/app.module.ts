import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgCanvaComponent } from './components/bg-canva/bg-canva.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConhecimentosComponent } from './components/conhecimentos/conhecimentos.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ConhecimentosCardComponent } from './components/conhecimentos/conhecimentos-card/conhecimentos-card.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    BgCanvaComponent,
    NavBarComponent,
    InicioComponent,
    ConhecimentosComponent,
    ProjetosComponent,
    ConhecimentosCardComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
