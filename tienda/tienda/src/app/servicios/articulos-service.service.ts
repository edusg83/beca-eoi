import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../clases/articulo';
import {params} from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosServiceService {

  constructor(private http:HttpClient) { }

  datoServicio?:string

  getArticulos():Observable<Array<Articulo>> {
    return this.http.get<Array<Articulo>>(params.URL_BACK);
  }

  postArticulo(articulo:Articulo){
    const httpOptions={
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Articulo>(params.URL_BACK,articulo,httpOptions);
  }

  putArticulo(articulo:Articulo, id:number){
    const httpOptions={
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
    const url = `${params.URL_BACK}/${id}`;
    return this.http.put<Articulo>(url,articulo,httpOptions);
  }

  deleteArticulo(id:number):Observable<{}>{
    const httpOptions={
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
    let url = params.URL_BACK + "/" + id;
    return this.http.delete<Articulo>(url,httpOptions);
  }
}
