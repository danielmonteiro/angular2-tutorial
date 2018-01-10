import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

    @ViewChild('campoInput') valorInput: ElementRef;

    @Input() valor:number;

    @Output() mudouValorViewChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementa(){
      this.valorInput.nativeElement.value--;
      this.mudouValorViewChild.emit({novoValor: this.valorInput.nativeElement.value});
  }

  incrementa(){
      this.valorInput.nativeElement.value++;
      this.mudouValorViewChild.emit({novoValor: this.valorInput.nativeElement.value});
  }

}
