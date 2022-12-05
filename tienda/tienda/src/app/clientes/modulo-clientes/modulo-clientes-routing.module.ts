import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClienteComponent } from '../components/dashboard-cliente/dashboard-cliente.component';
import { DeleteClienteComponent } from '../components/delete-cliente/delete-cliente.component';
import { GetClienteComponent } from '../components/get-cliente/get-cliente.component';
import { PostClienteComponent } from '../components/post-cliente/post-cliente.component';
import { PutClienteComponent } from '../components/put-cliente/put-cliente.component';

const routes: Routes = [
  {
    path:'',component:DashboardClienteComponent,
    children: [
      {
        path:'get-cliente',component:GetClienteComponent
      },
      {
        path:'post-cliente',component:PostClienteComponent
      },
      {
        path:'put-cliente',component:PutClienteComponent
      },
      {
        path:'delete-cliente',component:DeleteClienteComponent
      }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloClientesRoutingModule { }
