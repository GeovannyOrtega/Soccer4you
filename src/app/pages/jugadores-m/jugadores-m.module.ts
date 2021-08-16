import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresMPageRoutingModule } from './jugadores-m-routing.module';

import { JugadoresMPage } from './jugadores-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresMPageRoutingModule
  ],
  declarations: [JugadoresMPage]
})
export class JugadoresMPageModule {}
