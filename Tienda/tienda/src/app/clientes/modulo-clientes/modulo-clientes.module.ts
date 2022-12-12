import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloClientesRoutingModule } from './modulo-clientes-routing.module';
import { PostClienteComponent } from '../components/post-cliente/post-cliente.component';
import { PutClienteComponent } from '../components/put-cliente/put-cliente.component';
import { GetClienteComponent } from '../components/get-cliente/get-cliente.component';
import { DeleteClienteComponent } from '../components/delete-cliente/delete-cliente.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostClienteComponent,
    PutClienteComponent,
    GetClienteComponent,
    DeleteClienteComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModuloClientesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuloClientesModule { }