import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './componentes/delete/delete.component';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { PostComponent } from './componentes/post/post.component';
import { PutComponent } from './componentes/put/put.component';

const routes: Routes = [
  {
    path:"go-post", component:PostComponent
  },
  {
    path:"go-list", component:ListaArticulosComponent
  },
  {
    path:"go-put/:id", component:PutComponent
  },
  {
    path:"go-delete", component:DeleteComponent
  },
  {
    path:"go-clientes",
    loadChildren: ()=> import('./clientes/modulo-clientes/modulo-clientes.module').then(m=>m.ModuloClientesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
