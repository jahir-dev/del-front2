import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { UpdateTagComponent } from './update-tag/update-tag.component';

const routes: Routes = [
  {
    path: '',
    component: ListTagsComponent
  },
  {
    path: 'modifier',
    component: UpdateTagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
