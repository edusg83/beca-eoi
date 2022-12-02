import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input()
  hijo:string = "a ";

  @Output()
  eventoOutputHijo:EventEmitter<string> = new EventEmitter ();


  ngOnChanges(changes:SimpleChanges):void{
    this.eventoOutputHijo.emit(changes['hijo'].currentValue + ' OUTPUT');
  }

  enviarDatos(){
    this.eventoOutputHijo.emit(this.hijo + " OUTPUT")
  }
}
