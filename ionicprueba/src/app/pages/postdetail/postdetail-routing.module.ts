import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostdetailPage } from './postdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PostdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostdetailPageRoutingModule {}
