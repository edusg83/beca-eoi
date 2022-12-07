import { Component } from '@angular/core';
import { Team } from 'src/app/classes/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-get-team',
  templateUrl: './get-team.component.html',
  styleUrls: ['./get-team.component.css']
})
export class GetTeamComponent {
  id:number=0;
  name?:string;
  players:Array<number>=[];
  ok:boolean=false;

  constructor(private teamService:TeamsService){

  }


getTeam(){
  this.teamService.getTeam(this.id).subscribe({
    next: (team:Team)=>{
      console.log(team.name)
      this.name = team.name;
      this.players = team.players;
      this.ok = true;
    }
  });
}

}
