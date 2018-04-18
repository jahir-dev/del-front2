import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsService } from './tags.service';
import { SpecialitesService } from './specialites.service';
import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ TagsService, SpecialitesService, PostsService ]
    };
  }
 }
