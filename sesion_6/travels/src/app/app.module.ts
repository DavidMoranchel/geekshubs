import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViajesComponent } from './viajes/viajes.component';
import { DetalleViajeComponent } from './detalle-viaje/detalle-viaje.component';

import { ViajeService } from './viaje.service';

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ViajesComponent,
    DetalleViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ViajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
