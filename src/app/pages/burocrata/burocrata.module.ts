import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurocrataPageRoutingModule } from './burocrata-routing.module';

import { BurocrataPage } from './burocrata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurocrataPageRoutingModule
  ],
  declarations: [BurocrataPage]
})
export class BurocrataPageModule {}
