import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TagsRoutingModule } from './tags-routing.module';
import { UpdateTagComponent } from './update-tag/update-tag.component';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    TagsRoutingModule,
    CoreModule,
    FormsModule
  ],
  declarations: [UpdateTagComponent, ListTagsComponent]
})
export class TagsModule { }
