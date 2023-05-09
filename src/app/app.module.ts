import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GatoBotasDirective } from './directives/gato-botas.directive';

@NgModule({
  declarations: [
    AppComponent,
    GatoBotasDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
