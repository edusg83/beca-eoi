import { Team } from "./team";

export class Player {
    id:number = 0;
    name:string="";
    age:number=0;
    position:string="";
    number:number=0;
    teamId:number=0;
    team:Team = new Team();

}
