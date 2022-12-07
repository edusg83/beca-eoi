import { Component } from '@angular/core';
import { Team } from 'src/app/classes/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-post-team',
  templateUrl: './post-team.component.html',
  styleUrls: ['./post-team.component.css']
})
export class PostTeamComponent {
  name:string="";

  constructor(private teamService:TeamsService){ }


  postTeam(){
    let team = new Team();
    team.name = this.name;
    team.players = new Array<number>;
    console.log(team.players)

    this.teamService.postTeam(team);
  }

}
