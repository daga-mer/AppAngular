import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { JikanComponent } from './jikan/jikan.component';
import { RouteModule } from "./Route/Route.module";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    JikanComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
