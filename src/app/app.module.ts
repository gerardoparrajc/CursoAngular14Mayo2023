import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuloPruebaModule } from './modulo-prueba/modulo-prueba.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuloPruebaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
