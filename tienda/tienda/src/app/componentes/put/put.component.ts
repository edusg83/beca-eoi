import { Component } from '@angular/core';
import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  id: number = 0;
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
  hacerPut() {
    const articulo = { 
      id: this.id,
      name: this.name,
      description: this.description,
      image: this.image,
      price: this.price,
      stock: this.stock,
      selected: this.selected,
      quantity: this.quantity
    };
    this.articulosServiceService.putArticulo(articulo).subscribe((response) => {
      console.log(response)
    })
  }

}
