import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularmapPage } from './angularmap.page';

const routes: Routes = [
  {
    path: '',
    component: AngularmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularmapPageRoutingModule {}
