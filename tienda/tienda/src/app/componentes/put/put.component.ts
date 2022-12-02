import { Component } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  name: string = Articulo.name;

  constructor(private servicioArticulo:ArticulosServiceService){
    
  }

  hacerPut(){
    let art: Articulo = {
      name: this.name,
      description: 'Articulo 1',
      image: 'assets/balon.png',
      price: 12.4,
      stock: 12,
      selected: false,
      quantity: 0
  };

  this.servicioArticulo.putArticulo(art).subscribe({
    next: (articulo:Articulo)=>{
      console.log(articulo);
    },
    error: (error)=>{
      console.log(error);
    }
  })
  }
}
