import { Component, OnInit } from '@angular/core';

import { Viaje } from '../viaje';
import { VIAJES } from '../mock-viajes';

import { ViajeService } from '../viaje.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  viajeSeleccionado: Viaje;
  viajes: Viaje[];

  constructor(private viajeService: ViajeService) { }

  ngOnInit() {
    this.getViajes();
  }

  // onSelect(viaje: Viaje): void {
  //   this.viajeSeleccionado = viaje;
  // }

  // forma sincróna
  // getViajes(): void {
  //   this.viajes = this.viajeService.getViajes();
  // }

  // forma asincróna
  getViajes(): void {
    this.viajeService.getViajes()
        .subscribe(viajes => this.viajes = viajes);
  }
}
