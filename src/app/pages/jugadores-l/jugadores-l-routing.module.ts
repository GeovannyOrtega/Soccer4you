import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresLPage } from './jugadores-l.page';

const routes: Routes = [
  {
    path: '',
    component: JugadoresLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresLPageRoutingModule {}
