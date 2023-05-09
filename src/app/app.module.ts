import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GatoBotasDirective } from './directives/gato-botas.directive';
import { GreenBackgroundOnClickDirective } from './directives/green-background-on-click.directive';
import { DestacarDirective } from './directives/destacar/destacar.directive';
import { UnlessDirective } from './directives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    GatoBotasDirective,
    GreenBackgroundOnClickDirective,
    DestacarDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
