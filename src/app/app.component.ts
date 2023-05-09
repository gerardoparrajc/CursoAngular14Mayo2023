import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pintarRojo = true;
  pintarFondoAzul = 3 < 7;
  backgroundColor = false;
}
