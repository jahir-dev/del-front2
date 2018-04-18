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
    path: 'posts',
    loadChildren: 'app/views/posts/posts.module#PostsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
