import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapostsPageRoutingModule } from './listaposts-routing.module';

import { ListapostsPage } from './listaposts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapostsPageRoutingModule
  ],
  declarations: [ListapostsPage]
})
export class ListapostsPageModule {}
