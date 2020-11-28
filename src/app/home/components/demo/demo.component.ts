import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  prueba = "Hola2";
  @Output() agregarFrutaClick: EventEmitter<any> = new EventEmitter();

  items = [];
  fruits = [
    {
      id: 1,
      nombre: 'manzana',
      precio: 500
    },
    {
      id: 2,
      nombre: 'piña',
      precio: 1500
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addFruit(){
    this.items.push('Nueva fruta');
    this.agregarFrutaClick.emit('Se agrego fruta');
  }

  deleteFruit(index: number) {
    this.items.splice(index, 1);
  }

}
