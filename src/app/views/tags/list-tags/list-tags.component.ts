import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../models/data-model';
import { TagsService } from '../../../core/tags.service';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {
  data: any;
  tags: Tag[];
  tag: Tag = new Tag();
  label = 'test';
  alertOperation: String;
  error = false;
  errorMsg = 'Erreur de siasie';

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    console.log('in list tags ');
    this.tagsService.getAllTags().subscribe(tags => this.tags = tags);
  }

  ajouterTag() {
    if (!this.tag.label || this.tag.label.length <= 2 ) {
      this.error = true;
      this.errorMsg = 'Veuillez saisir un nom de tag valide.';
      return;
    }
    this.error = false;
    this.errorMsg = '';

    console.log('dans ajouter tag');
    this.tagsService.createTag(this.tag).subscribe( resp =>  { this.alertOperation = resp.body;
      if ( resp.body === 'Tag created') {
      this.tag.id = this.tags[0].id + 1;
      const newTag = new Tag();
      newTag.id = this.tags[0].id + 1;
      newTag.label = this.tag.label;
      this.tags.unshift(newTag);
    }}, null, () => this.tag = new Tag() );

  }

  // ajouterTag() {
  //   if (!this.tag.label || this.tag.label.length <= 2 ) {
  //     this.error = true;
  //     this.errorMsg = 'Veuillez saisir un nom de tag valide.';
  //     return;
  //   }
  //   this.error = false;
  //   this.errorMsg = '';

  //   console.log('dans ajouter tag');
  //   this.tagsService.createTag(this.tag).subscribe(tag => console.log(tag),
  //     resp => {
  //       console.log('test resp ' + resp.status + ' ' + resp.toString());
  //       this.alertOperation = 'Operation executé avec succés';
  //       console.log('op : ' + this.alertOperation);
  //     });
  //   console.log('label = ' + this.label);
  // }

  resetAlertOp() {
    this.alertOperation = '';
  }

  modifierTag(id, label) {
    console.log('id et label ' + id + ' - ' + label);
  }

  supprimerTag(tag) {
    console.log('delete this shit ');
    this.tagsService.deleteTagById(tag.id).subscribe( resp => { this.alertOperation = resp.body;
       this.tags.splice( this.tags.indexOf(tag), 1 ); });
  }

}
