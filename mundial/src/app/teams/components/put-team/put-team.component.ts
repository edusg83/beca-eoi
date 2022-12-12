import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DefaultValueAccessor, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Team } from 'src/app/classes/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-put-team',
  templateUrl: './put-team.component.html',
  styleUrls: ['./put-team.component.css']
})
export class PutTeamComponent implements OnInit, OnChanges {

  id:number=0;
  name:string="";
  newName:string="";
 // team:Team=new Team()
  players:Array<number>=[];
  teams:Array<Team>=[];




constructor(private teamService:TeamsService){
    
}
  ngOnChanges(changes: SimpleChanges): void {
    
  }

 ngOnInit():void {
    this.teamService.getTeams().subscribe({
      next: (teams:Array<Team>)=>{
        this.teams = teams;
      }
    });
  }

  getTeam(){
    this.teamService.getTeam(this.id).subscribe({
      next: (team:Team)=>{
        this.name = team.name;
        this.players = team.players;
      },
    });
  }

  putTeam(){
    let team=new Team();
    team.id=this.id;
    team.name=this.newName;
    team.players = this.players;
    this.teamService.putTeam(team);
  }

}
