import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanjoaquinPage } from './sanjoaquin.page';

const routes: Routes = [
  {
    path: '',
    component: SanjoaquinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanjoaquinPageRoutingModule {}
