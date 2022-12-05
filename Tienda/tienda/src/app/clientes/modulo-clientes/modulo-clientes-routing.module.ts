import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DeleteClienteComponent } from '../components/delete-cliente/delete-cliente.component';
import { GetClienteComponent } from '../components/get-cliente/get-cliente.component';
import { PostClienteComponent } from '../components/post-cliente/post-cliente.component';
import { PutClienteComponent } from '../components/put-cliente/put-cliente.component';

const routes: Routes = [
{
  path:'', component: DashboardComponent,
  children:[
    {
      path:"go-post-cliente", component:PostClienteComponent
    },
    {
      path:"go-list-cliente", component:GetClienteComponent
    },
    {
      path:"go-put-cliente/:id", component:PutClienteComponent
    },
    {
      path:"go-delete-cliente", component:DeleteClienteComponent
    },
  ]
}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloClientesRoutingModule { 
}

