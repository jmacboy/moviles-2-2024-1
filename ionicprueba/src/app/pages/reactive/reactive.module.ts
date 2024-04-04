import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactivePageRoutingModule } from './reactive-routing.module';

import { ReactivePage } from './reactive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactivePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReactivePage]
})
export class ReactivePageModule {}
