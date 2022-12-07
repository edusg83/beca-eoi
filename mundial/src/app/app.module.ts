import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJugadoresComponent } from './componentes/lista-jugadores/lista-jugadores.component';
import { ListaSeleccionComponent } from './componentes/lista-seleccion/lista-seleccion.component';
import { PostJugadoresComponent } from './componentes/post-jugadores/post-jugadores.component';
import { PutJugadoresComponent } from './componentes/put-jugadores/put-jugadores.component';
import { GetJugadoresComponent } from './componentes/get-jugadores/get-jugadores.component';
import { DeleteJugadoresComponent } from './componentes/delete-jugadores/delete-jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaJugadoresComponent,
    ListaSeleccionComponent,
    PostJugadoresComponent,
    PutJugadoresComponent,
    GetJugadoresComponent,
    DeleteJugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
