import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpecialitesRoutingModule } from './specialites-routing.module';
import { AddSpecialiteComponent } from './add-specialite/add-specialite.component';
import { UpdateSpecialiteComponent } from './update-specialite/update-specialite.component';
import { ListSpecialitesComponent } from './list-specialites/list-specialites.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SpecialitesRoutingModule,
    CoreModule,
    FormsModule,
  ],
  declarations: [AddSpecialiteComponent, UpdateSpecialiteComponent, ListSpecialitesComponent]
})
export class SpecialitesModule { }
