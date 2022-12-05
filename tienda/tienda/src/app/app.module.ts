import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './pipes/total.pipe';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './componentes/post/post.component';
import { PutComponent } from './componentes/put/put.component';
import { DeleteComponent } from './componentes/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ListaArticulosComponent,
    PostComponent,
    PutComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
