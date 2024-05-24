import { Component, OnInit } from '@angular/core';
import { InstrumentDataService } from '../../services/instrument-data/instrument-data.service';
import { InstrumentCartService } from '../../services/instrument-cart/instrument-cart.service';
import { Instrument } from '../../interfaces/instrument';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.scss'
})
export class InstrumentListComponent implements OnInit {
  // Propiedades
  instruments: Instrument[] = [];

              // Invocamos el servicio.
  constructor(private InstrumentData: InstrumentDataService, private InstrumentCart: InstrumentCartService) {}

  ngOnInit(): void {
    // Peticion HTTP GET nos trae los datos y los guardamos en la propiedad instrumentos.
    this.InstrumentData.getAllInstruments().subscribe(data => this.instruments = data);
    this.InstrumentCart.items.subscribe((data) => console.log(data));
  }

  listenChanges(quantity: Number): void {
    return;
  }

  addItemToCart(item: Instrument){
    if(item.stock < item.quantity){
      return;
    }
    this.InstrumentCart.addToCart(item);
    item.stock -= item.quantity;
    if(item.quantity > item.stock){
      item.quantity = item.stock;
    }
  }
}
