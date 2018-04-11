import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViajesComponent }      from './viajes/viajes.component';
import { DetalleViajeComponent }  from './detalle-viaje/detalle-viaje.component';


const routes: Routes = [
  { path: 'viajes', component: ViajesComponent },
  { path: 'detail/:id', component: DetalleViajeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
