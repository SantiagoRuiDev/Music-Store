import { Injectable } from '@angular/core';
import { Instrument } from '../../interfaces/instrument';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = "https://664df589ede9a2b55655a7a0.mockapi.io/api/v1/instruments";

@Injectable({
  providedIn: 'root'
})
export class InstrumentDataService {

  constructor(private http: HttpClient) { }

  // Conseguimos los instrumentos de la tienda via petición HTTP
  getAllInstruments(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(URL);
  }
}
