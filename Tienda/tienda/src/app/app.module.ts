import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './pipes/total.pipe';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticulosServiceService } from './servicios/articulos-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './componentes/post/post.component';
import { PutComponent } from './componentes/put/put.component';
import { DeleteComponent } from './componentes/delete/delete.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { PadreComponent } from './componentes/padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ListaArticulosComponent,
    PostComponent,
    PutComponent,
    DeleteComponent,
    HijoComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticulosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
