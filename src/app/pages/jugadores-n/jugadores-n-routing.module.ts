import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresNPage } from './jugadores-n.page';

const routes: Routes = [
  {
    path: '',
    component: JugadoresNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresNPageRoutingModule {}
