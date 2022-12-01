import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './pipes/total.pipe';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './componentes/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ListaArticulosComponent,
    PostComponent
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
