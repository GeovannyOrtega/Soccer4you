import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurocrataPage } from './burocrata.page';

const routes: Routes = [
  {
    path: '',
    component: BurocrataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurocrataPageRoutingModule {}
