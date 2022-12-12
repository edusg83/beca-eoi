import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlState, FormGroup } from '@angular/forms';
import { Player } from 'src/app/classes/player';
import { Team } from 'src/app/classes/team';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-put-player',
  templateUrl: './put-player.component.html',
  styleUrls: ['./put-player.component.css']
})
export class PutPlayerComponent {
 




  // Atributos iniciales
  player:Player=new Player();


  // Atributos nuevos que entraran por input
  newPlayer:Player = new Player();


  // Declaracion de listas de selects
  players:Array<Player>=[];
  teams:Array<Team>=[];

  constructor(private playerService:PlayersService, private teamService:TeamsService, private fb:FormBuilder){

  }


  ngOnInit():void {
    this.playerService.getPlayers().subscribe({
      next: (players:Array<Player>)=>{
        this.players = players;
      }
    });

    this.teamService.getTeams().subscribe({
      next: (teams:Array<Team>)=>{
        this.teams = teams;
      }
    });
  }

  getPlayer(){
    // Buscamos un jugador por el id introducido al seleccionar un jugador del select
    this.playerService.getPlayer(this.player.id).subscribe({
      next: (player:Player)=>{
        this.player = player;

        // Ponemos los nuevos valores igual que los viejos, para que al hacer el put no queden en blanco si no se modifican
        this.newPlayer = this.player;
      },
    });
  }

  putPlayer(){
    

    // Buscamos el nuevo equipo por su id y se lo asignamos
    this.teamService.getTeam(this.newPlayer.teamId).subscribe({
      next: (team:Team)=>{
        // Añadimos el id del jugador a la lista de jugadores del equipo
        team.players.push(this.newPlayer.id)
        //Asignamos el equipo actualizado al jugador
        this.newPlayer.team = team
        // Hacemos el put del jugador y del equipo
        this.teamService.putTeam(team);
        this.playerService.putPlayer(this.newPlayer);
      },
    });


   
  }




  getTeam(teamId:number){
    this.teamService.getTeam(teamId).subscribe({
      next: (team:Team)=>{
        this.player.team = team
      },
    });
  }



}
