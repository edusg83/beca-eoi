import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';
import { PostComponent } from './componentes/post/post.component';

const routes: Routes = [

{
  path:'go-post/:id',component: PostComponent
},
{
  path:'got-lista-articulos',component:ListaArticulosComponent
},
{
  path:'go-clientes',
  loadChildren: ()=> import('./clientes/modulo-clientes/modulo-clientes.module').then(m=>m.ModuloClientesModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
