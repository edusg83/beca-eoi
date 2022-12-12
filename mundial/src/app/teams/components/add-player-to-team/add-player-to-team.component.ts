import { Component } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-player-to-team',
  templateUrl: './add-player-to-team.component.html',
  styleUrls: ['./add-player-to-team.component.css']
})
export class AddPlayerToTeamComponent {
  // Atributos de la seleccion
  team:Team=new Team();


  // Atributos del jugador
  player:Player=new Player();


  // Listas para los selects
  playersList:Array<Player>=[];
  teams:Array<Team>=[];




constructor(private teamService:TeamsService, private playerService:PlayersService){
    
}


 ngOnInit():void {
    this.teamService.getTeams().subscribe({
      next: (teams:Array<Team>)=>{
        this.teams = teams;
      }
    });

    this.playerService.getPlayers().subscribe({
      next: (players:Array<Player>)=>{
        this.playersList = players;
      }
    });

  }


  filterPlayers(){
    const result = this.playersList.filter(player => player.teamId==0);
    this.playersList = result;
  }

  getTeam(){
    this.teamService.getTeam(this.team.id).subscribe({
      next: (team:Team)=>{
        this.team = team
      },
    });
  }

  getPlayer(){
    this.playerService.getPlayer(this.player.id).subscribe({
      next: (player:Player)=>{
       this.player = player;
      },
    });
  }

  addPlayer(){
    this.team.players.push(this.player.id)
    this.player.team = this.team;
    this.player.teamId = this.team.id;
   
    this.teamService.putTeam(this.team);
    this.playerService.putPlayer(this.player);
  }




}
