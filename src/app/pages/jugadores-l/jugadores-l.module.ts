import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresLPageRoutingModule } from './jugadores-l-routing.module';

import { JugadoresLPage } from './jugadores-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresLPageRoutingModule
  ],
  declarations: [JugadoresLPage]
})
export class JugadoresLPageModule {}
