import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapostsPage } from './listaposts.page';

const routes: Routes = [
  {
    path: '',
    component: ListapostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapostsPageRoutingModule {}
