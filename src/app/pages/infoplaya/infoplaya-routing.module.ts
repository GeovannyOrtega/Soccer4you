import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoplayaPage } from './infoplaya.page';

const routes: Routes = [
  {
    path: '',
    component: InfoplayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoplayaPageRoutingModule {}
