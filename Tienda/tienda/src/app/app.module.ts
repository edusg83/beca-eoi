import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './pipes/total.pipe';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { FormsModule } from '@angular/forms';
import { ArticulosServiceService } from './servicios/articulos-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ListaArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArticulosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
