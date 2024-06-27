import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularmapPageRoutingModule } from './angularmap-routing.module';

import { AngularmapPage } from './angularmap.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularmapPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [AngularmapPage]
})
export class AngularmapPageModule { }
