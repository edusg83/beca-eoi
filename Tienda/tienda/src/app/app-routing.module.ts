import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { PostComponent } from './componentes/post/post.component';

const routes: Routes = [
  {
    path:"go-post", component:PostComponent
  },
  {
    path:"go-list", component:ListaArticulosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
