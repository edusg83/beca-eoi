import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../clases/articulo';
import { ARTICULOS } from '../mocks/mocks';
import { params } from '../environment/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ArticulosServiceService {
 
  constructor(private http:HttpClient) { }

  getArticulos(): Observable<Array<Articulo>>{
    return this.http.get<Array<Articulo>>(params.URL_BACK);
  }
  postArticulo(articulo: Articulo): Observable<Array<Articulo>>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Array<Articulo>>(params.URL_BACK, articulo, httpOptions);
  }

  putArticulo(articulo: Articulo): Observable<Array<Articulo>>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${params.URL_BACK}/${articulo.id}`;
    return this.http.put<Array<Articulo>>(url, articulo, httpOptions);
  }

  deleteArticulo(id:number): Observable<{}>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${params.URL_BACK}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
