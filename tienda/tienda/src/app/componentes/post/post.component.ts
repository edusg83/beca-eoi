import { Component } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  name:string='';

  constructor(private servicioArticulo:ArticulosServiceService){
    
  }

  hacerPost() {
    let art: Articulo = {
      name. this.name,
      description: 'Articulo 1',
      image: 'assets/balon.png',
      price: 12.4,
      stock: 12,
      selected: false,
      quantity: 0
    };

    this.servicioArticulo.postArticulo(art).subscribe({
      next: (articulo:Articulo)=>{
        console.log(articulo);
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

}
