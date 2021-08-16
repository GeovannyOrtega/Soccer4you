import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToledoPageRoutingModule } from './toledo-routing.module';

import { ToledoPage } from './toledo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToledoPageRoutingModule
  ],
  declarations: [ToledoPage]
})
export class ToledoPageModule {}
