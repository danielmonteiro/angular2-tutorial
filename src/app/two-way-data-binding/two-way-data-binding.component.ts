import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

    nome: string = "abc"

    pessoa = {
        nome: 'João',
        idade: '30',
        filho: {
            nome: 'Jackson'
        }
    }

  constructor() { }

  ngOnInit() {
  }

}
