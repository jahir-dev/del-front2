import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../models/data-model';
import { TagsService } from '../../../core/tags.service';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {
  tags: Tag[];

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    console.log('in list tags ');
    this.tagsService.getAllTags().subscribe(tags => this.tags = tags );
  }

}
