import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { AddTagComponent } from './add-tag/add-tag.component';
import { UpdateTagComponent } from './update-tag/update-tag.component';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    TagsRoutingModule,
    CoreModule
  ],
  declarations: [AddTagComponent, UpdateTagComponent, ListTagsComponent]
})
export class TagsModule { }
