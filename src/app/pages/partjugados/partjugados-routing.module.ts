import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartjugadosPage } from './partjugados.page';

const routes: Routes = [
  {
    path: '',
    component: PartjugadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartjugadosPageRoutingModule {}
