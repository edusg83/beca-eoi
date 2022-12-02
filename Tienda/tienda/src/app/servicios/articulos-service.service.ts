import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../clases/articulo';
import { PARAMS } from '../enviroment/enviroment';
import { ARTICULOS } from '../mocks/mocks';

@Injectable({
  providedIn: 'root'
})
export class ArticulosServiceService {

  constructor(private http:HttpClient) { }

  getArticulos():Observable<Array<Articulo>>{
    return this.http.get<Array<Articulo>>(PARAMS.URL_BACK)
  }

  getArticulo(id:number):Observable<Array<Articulo>>{
    return this.http.get<Array<Articulo>>(PARAMS.URL_BACK+"/"+id)
  }

  postArticulo(articulo:Articulo){
    console.log(articulo)
    this.http.post<Articulo>(PARAMS.URL_POST, articulo).subscribe();
  }

  putArticulo(articulo:Articulo){
    console.log(articulo)
    let id = articulo.id;
    this.http.put<Articulo>(PARAMS.URL_POST+"/"+id, articulo).subscribe();
  }


  deleteArticulo(id:number){
    this.http.delete<Articulo>(PARAMS.URL_POST+"/"+id).subscribe();
  }
}
