import { Injectable } from '@angular/core';

import { Viaje } from './viaje';
import { VIAJES } from './mock-viajes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ViajeService {

  // getViajes(): Viaje[] {
  //   return VIAJES;
  // }

  getViajes(): Observable<Viaje[]> {
    return of(VIAJES);
  }

  getViaje(id: number): Observable<Viaje> {
    return of(VIAJES.find(viaje => viaje.id === id));
  }


  constructor() { }

}
