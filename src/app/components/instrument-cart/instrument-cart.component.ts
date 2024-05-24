import { Component, OnInit } from '@angular/core';
import { Instrument } from '../../interfaces/instrument';
import { InstrumentCartService } from '../../services/instrument-cart/instrument-cart.service';

@Component({
  selector: 'app-instrument-cart',
  templateUrl: './instrument-cart.component.html',
  styleUrl: './instrument-cart.component.scss'
})
export class InstrumentCartComponent implements OnInit {
  cartModal: boolean = false; // Esta propiedad sirve para mostrar/ocultar el carrito.
  cart: Instrument[] = [];

  // Invocamos al servicio
  constructor(private InstrumentCart: InstrumentCartService){}

  ngOnInit(): void {
    this.InstrumentCart.items.subscribe(data => this.cart = data);
  }

  // Funcion para abrir/cerrar el carrito.
  openCartModal (): void {
    this.cartModal = !this.cartModal;
  }

  // Funcion para eliminar un item del carrito.
  deleteFromCart(item: Instrument){
    this.InstrumentCart.deleteItemFromCart(item);
  }
}
