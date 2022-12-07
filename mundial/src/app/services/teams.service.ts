import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../classes/team';
import { PARAMS } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }



  getTeams():Observable<Array<Team>>{
    return this.http.get<Array<Team>>(PARAMS.URL_BACK)
  }

  getTeam(id:number):Observable<Team>{
    return this.http.get<Team>(PARAMS.URL_BACK+"/"+id)
  }

}
