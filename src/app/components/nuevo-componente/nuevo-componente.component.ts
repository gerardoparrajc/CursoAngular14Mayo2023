import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.scss']
})
export class NuevoComponenteComponent {

  @Input() propiedad: string = '';
  @Input() otraPropiedad: string[] = [];

  @Output() propiedadCambiada: EventEmitter<string> = new EventEmitter<string>();

  doClick() {
    this.propiedadCambiada.emit('He cambiado');
  }
}
