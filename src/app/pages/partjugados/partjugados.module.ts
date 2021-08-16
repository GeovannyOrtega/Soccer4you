import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartjugadosPageRoutingModule } from './partjugados-routing.module';

import { PartjugadosPage } from './partjugados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartjugadosPageRoutingModule
  ],
  declarations: [PartjugadosPage]
})
export class PartjugadosPageModule {}
