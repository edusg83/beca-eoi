import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './pipes/total.pipe';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';


@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ListaArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
