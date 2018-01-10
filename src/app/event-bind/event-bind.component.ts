import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

    stringKeyUp: string;
    stringEnter: string;
    stringBlur: string;
    isMouseOver: boolean = false;
    nome: string = 'abc';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
      alert("Clicked!");
  }

  onKeyUp(event: KeyboardEvent){
      this.stringKeyUp = (<HTMLInputElement>event.target).value;
  }

  onEnter(valor){
      this.stringEnter = valor;
  }

  onBlur(valor){
      this.stringBlur = valor;
  }

  onMouseOverOut(){
      this.isMouseOver = !this.isMouseOver;
  }

}
