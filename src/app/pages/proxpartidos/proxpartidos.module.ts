import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProxpartidosPageRoutingModule } from './proxpartidos-routing.module';

import { ProxpartidosPage } from './proxpartidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProxpartidosPageRoutingModule
  ],
  declarations: [ProxpartidosPage]
})
export class ProxpartidosPageModule {}
