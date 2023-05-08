import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  ngAfterViewInit(): void {
    console.log('Ejecutando AfterViewInit');
  }

  titulo = 'Un título';
  contador = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Ejecutando OnChanges');
  }
  ngOnInit(): void {
    console.log('Ejecutando OnInit');
  }

  doClick() {
    this.titulo = 'Título cambiado ' + this.contador++;
  }
}
