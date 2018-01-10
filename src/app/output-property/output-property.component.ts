import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

    @Input() valor:number;

    @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementa(){
      this.valor--;
      this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa(){
      this.valor++;
      this.mudouValor.emit({novoValor: this.valor});
  }

}
