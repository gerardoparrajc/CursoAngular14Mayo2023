import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pintarRojo = false;
  pintarFondoAzul = 3 < 7;
  backgroundColor = false;

  contador: number = 0;

  elementos = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 4',
    'Elemento 5',
    'Elemento 6'
  ];

  onClick() {
    this.contador++;

    if (this.contador > 10) {
      this.contador = 10;
    }
  }

}
