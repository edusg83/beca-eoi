import { Component } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id: number = 0;

  constructor(private articulosServiceService: ArticulosServiceService) {
    console.log(this.articulosServiceService)
  }

  hacerDelete(id:number){
    this.articulosServiceService.deleteArticulo(this.id).subscribe((response) => {
      console.log(response)
    })
  }
}
