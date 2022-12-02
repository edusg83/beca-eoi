import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetClienteComponent } from '../components/get-cliente/get-cliente.component';
import { PostClienteComponent } from '../components/post-cliente/post-cliente.component';

const routes: Routes = [
  {
    path:'get-cliente',component:GetClienteComponent
  },
  {
    path:'post-cliente',component:PostClienteComponent
  },
  {
    path:'',component:GetClienteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloClientesRoutingModule { }
