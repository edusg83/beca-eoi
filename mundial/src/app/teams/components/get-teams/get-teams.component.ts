import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/classes/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.css']
})
export class GetTeamsComponent implements OnInit{

  teams:Array<Team>=[];

  constructor(private teamService:TeamsService){

  }



  ngOnInit():void {
    this.teamService.getTeams().subscribe({
      next: (teams:Array<Team>)=>{
        this.teams = teams;
      }
    });
  }




  }
