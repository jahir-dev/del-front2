import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tags',
    loadChildren: 'app/views/tags/tags.module#TagsModule'
  },
  {
    path: 'specialites',
    loadChildren: 'app/views/specialites/specialites.module#SpecialitesModule'
  },
  {
    path: 'tags',
    loadChildren: 'app/views/tags/tags.module#TagsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
