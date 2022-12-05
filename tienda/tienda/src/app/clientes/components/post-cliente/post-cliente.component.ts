import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-cliente',
  templateUrl: './post-cliente.component.html',
  styleUrls: ['./post-cliente.component.css']
})
export class PostClienteComponent {

  formularioCliente:FormGroup;
  nombre?:FormControl;
  edad?: FormControl;
  datos:any

  constructor(private fb: FormBuilder){
    this.formularioCliente = this.fb.group({
      "nombre":[this.nombre,Validators.email],
      "edad":[this.edad]
    })
  }

  verDatos(){
    this.datos=this.formularioCliente.get('nombre')?.value;
  }

  validar(){
    
  }
}
