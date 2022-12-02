import { Component } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id:number = 0;
  constructor(private servicioArticulo: ArticulosServiceService){

  }

borrar(){
  let ID:number = this.id;
  this.servicioArticulo.deleteArticulo(ID);    
};

}
 
