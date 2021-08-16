import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresMPage } from './jugadores-m.page';

const routes: Routes = [
  {
    path: '',
    component: JugadoresMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresMPageRoutingModule {}
