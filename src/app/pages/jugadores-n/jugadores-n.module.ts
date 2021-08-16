import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresNPageRoutingModule } from './jugadores-n-routing.module';

import { JugadoresNPage } from './jugadores-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresNPageRoutingModule
  ],
  declarations: [JugadoresNPage]
})
export class JugadoresNPageModule {}
