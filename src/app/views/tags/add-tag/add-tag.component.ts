import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../../core/tags.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {

  constructor(public tagService: TagsService) { }

  ngOnInit() {
    this.tagService.logMe();
  }

}
