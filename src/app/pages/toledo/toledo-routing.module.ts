import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToledoPage } from './toledo.page';

const routes: Routes = [
  {
    path: '',
    component: ToledoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToledoPageRoutingModule {}
