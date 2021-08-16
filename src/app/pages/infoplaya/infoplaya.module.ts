import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoplayaPageRoutingModule } from './infoplaya-routing.module';

import { InfoplayaPage } from './infoplaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoplayaPageRoutingModule
  ],
  declarations: [InfoplayaPage]
})
export class InfoplayaPageModule {}
