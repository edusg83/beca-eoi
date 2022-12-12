import { Component } from '@angular/core';
import { Team } from 'src/app/classes/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent {

  id:number=0;
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


  deleteTeam(){
    this.teamService.deleteTeam(this.id);
  }

}
