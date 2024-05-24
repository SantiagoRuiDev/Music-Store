import { Injectable } from '@angular/core';
import { Instrument } from '../../interfaces/instrument';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentCartService {

  constructor() { }

  private _items: Instrument[] = [];
  private _itemsSubject: BehaviorSubject<Instrument[]> = new BehaviorSubject(this._items);
  public items: Observable<Instrument[]> = this._itemsSubject.asObservable();


  // Añade al carrito o suma la cantidad si ya existe
  addToCart(item: Instrument) {
    let itemExistOnCart = this._items.find((search) => search.id == item.id);

    if(itemExistOnCart) {
      itemExistOnCart.quantity += item.quantity;
    } else {
      this._items.push({...item});
    }

    this._itemsSubject.next(this._items);
  }

  // Elimina item del carrito.
  deleteItemFromCart(item: Instrument){
    this._items = this._items.filter((filtered) => filtered.id != item.id);
    this._itemsSubject.next(this._items);
  }

}
