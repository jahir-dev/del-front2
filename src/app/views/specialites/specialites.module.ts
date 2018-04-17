import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitesRoutingModule } from './specialites-routing.module';
import { AddSpecialiteComponent } from './add-specialite/add-specialite.component';
import { UpdateSpecialiteComponent } from './update-specialite/update-specialite.component';
import { ListSpecialitesComponent } from './list-specialites/list-specialites.component';

@NgModule({
  imports: [
    CommonModule,
    SpecialitesRoutingModule
  ],
  declarations: [AddSpecialiteComponent, UpdateSpecialiteComponent, ListSpecialitesComponent]
})
export class SpecialitesModule { }
