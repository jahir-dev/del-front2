import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSpecialitesComponent } from './list-specialites/list-specialites.component';
import { AddSpecialiteComponent } from './add-specialite/add-specialite.component';
import { UpdateSpecialiteComponent } from './update-specialite/update-specialite.component';

const routes: Routes = [
  {
    path: '',
    component : ListSpecialitesComponent
  },
  {
    path: 'ajouter',
    component : AddSpecialiteComponent
  },
  {
    path: 'modifier',
    component : UpdateSpecialiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialitesRoutingModule { }
