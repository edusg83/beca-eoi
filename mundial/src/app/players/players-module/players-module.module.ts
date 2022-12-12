import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersModuleRoutingModule } from './players-module-routing.module';
import { GetPlayersComponent } from '../components/get-players/get-players.component';
import { GetPlayerComponent } from '../components/get-player/get-player.component';
import { PostPlayerComponent } from '../components/post-player/post-player.component';
import { PutPlayerComponent } from '../components/put-player/put-player.component';
import { DeletePlayerComponent } from '../components/delete-player/delete-player.component';
import { PlayersDashboardComponent } from '../components/players-dashboard/players-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetPlayersComponent,
    GetPlayerComponent,
    PostPlayerComponent,
    PutPlayerComponent,
    DeletePlayerComponent,
    PlayersDashboardComponent
  ],
  imports: [
    CommonModule,
    PlayersModuleRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlayersModuleModule { }
