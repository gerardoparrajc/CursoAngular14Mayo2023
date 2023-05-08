import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Este es el título';
  datos: string[] = [
    'Dato 1',
    'Dato 2',
    'Dato 3'
  ];

  constructor() {
    this.title = this.metodo('sadf');
  }

  metodo(argumentos: string) {
    return 'Algo';
  }

  showPropiedadCambiada(valor: string) {
    alert(valor);
  }
}
