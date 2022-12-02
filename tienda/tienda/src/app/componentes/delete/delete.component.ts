import { Component } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  idArti:number=0;

  constructor(private servicioArticulo:ArticulosServiceService){
    
  }

  hacerDelete(){
  let id = this.idArti;
  this.servicioArticulo.deleteArticulo(id).subscribe();
}
}
