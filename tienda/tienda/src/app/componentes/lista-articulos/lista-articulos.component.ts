import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';

import { ArticulosServiceService } from 'src/app/servicios/articulos-service.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  articulos: Array<Articulo>;
  tecla?: string;

  constructor(private servicioArticulo: ArticulosServiceService) {
    this.articulos = [];
  }

  ngOnInit(): void {
    this.servicioArticulo.getArticulos().subscribe({
      next: (ok: Array<Articulo>) => {
        this.articulos = ok;
      },
      error: (error) => {
      },

    }
    );
  }

  DownQuantity(art: Articulo) {
    if (art.quantity > 0) {
      art.quantity--;
      art.stock++;
    }
  }

  UpQuantity(art: Articulo) {
    if (art.stock > 0) {
      art.quantity++;
      art.stock--;
    }
  }

  teclaPulsada(evento: any) {
    this.tecla = evento.keyCode;
  }

}
