import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  // Declaramos los props que seran ingresados al llamar al componente
  @Input() quantity!: number;
  @Input() max!: number;
  // Los props de salida para el padre
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>(); 

  incrementQuantity() {
    // Comprobamos que la cantidad sea menor al stock
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity); // Emitimos el evento al padre
    }
  }

  decrementQuantity(){
    // Comprobamos que la cantidad sea mayor a cero
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity); // Emitimos el evento al padre
    }
  }

  onChangeQuantity(){
    // Si el usuario intenta ingresar un numero mayor al stock o menor a cero se le asigna el maximo a la cantidad.
    if(!(this.quantity > 0) || !(this.quantity < this.max)){
      this.quantity = this.max;
    }
    return this.quantityChange.emit(this.quantity);
  }
}
