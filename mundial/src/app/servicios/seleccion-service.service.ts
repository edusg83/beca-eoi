import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Selecciones} from '../clases/selecciones'
import {params} from '../environment/environmentSele'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeleccionServiceService {

  constructor(private http:HttpClient) { }

  getSelecciones():Observable<Array<Selecciones>>{
    return this.http.get<Array<Selecciones>>(params.URL_BACK);
  }
}
