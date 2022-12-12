export class Team {
  id:number=0;
  name:string="Sin asignar";
  players:Array<number>=[];



getId():number{
    return this.id;
}

getName():string{
    return this.name; 
}

getPlayers():Array<number>{
    return this.players;
}

}
