import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaformPageRoutingModule } from './personaform-routing.module';

import { PersonaformPage } from './personaform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaformPageRoutingModule
  ],
  declarations: [PersonaformPage]
})
export class PersonaformPageModule {}
