import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletePlayerComponent } from '../components/delete-player/delete-player.component';
import { GetPlayerComponent } from '../components/get-player/get-player.component';
import { GetPlayersComponent } from '../components/get-players/get-players.component';
import { PlayersDashboardComponent } from '../components/players-dashboard/players-dashboard.component';
import { PostPlayerComponent } from '../components/post-player/post-player.component';
import { PutPlayerComponent } from '../components/put-player/put-player.component';

const routes: Routes = [
  {
    path:'', component:PlayersDashboardComponent,
    children:[
      {
        path:'get-players', component:GetPlayersComponent
      },
      {
        path:'get-player', component:GetPlayerComponent
      },
      {
        path:'post-player', component:PostPlayerComponent
      },
      {
        path:'put-player', component:PutPlayerComponent
      },
      {
        path:'delete-player', component:DeletePlayerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersModuleRoutingModule {
 
}

