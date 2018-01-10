import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-property',
  templateUrl: './input-output-property.component.html',
  styleUrls: ['./input-output-property.component.css']
})
export class InputOutputPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMudouValor(event){
      console.log(event);
  }

  onMudouValorViewChild(event){
      console.log("ViewChild:");
      console.log(event);
  }

}
