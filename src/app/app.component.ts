import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Portfolio';
  public iniciado = false;

  public iniciar() {
    this.iniciado = true;
  }
}
