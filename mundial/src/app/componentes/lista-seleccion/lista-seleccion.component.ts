import { Component, OnInit } from '@angular/core';
import { Selecciones } from 'src/app/clases/selecciones';
import { SeleccionServiceService } from 'src/app/servicios/seleccion-service.service';

@Component({
  selector: 'app-lista-seleccion',
  templateUrl: './lista-seleccion.component.html',
  styleUrls: ['./lista-seleccion.component.css']
})
export class ListaSeleccionComponent implements OnInit{

  selecciones:Array<Selecciones>;

  constructor(private servicioSeleccion:SeleccionServiceService){
    this.selecciones = [];
  }

  ngOnInit(): void {
    this.servicioSeleccion.getSelecciones().subscribe({
      next:(ok:Array<Selecciones>) =>{
        this.selecciones = ok;
      },
      error: (error) =>{
        
      }
    })
      
  }
}
