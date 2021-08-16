import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanjoaquinPageRoutingModule } from './sanjoaquin-routing.module';

import { SanjoaquinPage } from './sanjoaquin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanjoaquinPageRoutingModule
  ],
  declarations: [SanjoaquinPage]
})
export class SanjoaquinPageModule {}
