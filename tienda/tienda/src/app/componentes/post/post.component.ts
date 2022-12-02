import { Component } from '@angular/core';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  name: string = "";
  description: string ="";
  image: string = "";
  price: number = 0;
  stock: number = 0;
  selected: boolean = false;
  quantity: number = 0;

  constructor(private articulosServiceService: ArticulosServiceService) {
    console.log(this.articulosServiceService)
  }
  hacerPost() {
    const articulo = { 
      name: this.name,
      description: this.description,
      image: this.image,
      price: this.price,
      stock: this.stock,
      selected: this.selected,
      quantity: this.quantity
    };
    this.articulosServiceService.postArticulo(articulo).subscribe((response) => {
      console.log(response)
    })
  }
}
