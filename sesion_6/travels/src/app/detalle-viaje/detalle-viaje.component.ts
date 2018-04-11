import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Viaje } from '../viaje';

import { ViajeService }  from '../viaje.service';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.component.html',
  styleUrls: ['./detalle-viaje.component.css']
})
export class DetalleViajeComponent implements OnInit {

  @Input() viaje: Viaje;

  constructor(
    private route: ActivatedRoute,
    private viajeService: ViajeService,
    private location: Location
  ) { }

  ngOnInit() {
     this.getViaje();
  }

  getViaje(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.viajeService.getViaje(id)
      .subscribe(viaje => this.viaje = viaje);
  }

  goBack(): void {
    this.location.back();
  }

}
