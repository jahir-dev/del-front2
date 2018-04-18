import { Component, OnInit } from '@angular/core';
import { Specialite } from '../../../models/data-model';
import { Tag } from '../../../models/data-model';
import { SpecialitesService } from '../../../core/specialites.service';
import { TagsService } from '../../../core/tags.service';

@Component({
  selector: 'app-list-specialites',
  templateUrl: './list-specialites.component.html',
  styleUrls: ['./list-specialites.component.css']
})
export class ListSpecialitesComponent implements OnInit {

  data: any;
  specialites: Specialite[];
  tags: Tag[];
  tag: Tag = new Tag();
  specialite: Specialite = new Specialite();
  label = 'test';
  alertOperation: String;
  error = false;
  errorMsg = 'Erreur de siasie';

  constructor(private specialiteService: SpecialitesService, private tagsService: TagsService) { }

  ngOnInit() {
    console.log('in list specialite ');
    this.specialiteService.getAllSpecialites().subscribe(specialites => this.specialites = specialites);
    this.tagsService.getAllTags().subscribe(tags => this.tags = tags);
  }

  ajouterSpecialite() {
    console.log('tags : ' + JSON.stringify(this.specialite));
    if (!this.specialite.label || this.specialite.label.length <= 2 ) {
      this.error = true;
      this.errorMsg = 'Veuillez saisir un nom de specialité valide.';
      return;
    }
    if (!this.specialite.tags || this.specialite.tags.length < 1 ) {
      this.error = true;
      this.errorMsg = 'Veuillez selectionner des tags.';
      return;
    }
    this.error = false;
    this.errorMsg = '';

    console.log('dans ajouter tag');
    this.specialiteService.createSpecialite(this.specialite).subscribe( resp =>  { this.alertOperation = resp.body;
      if ( resp.body === 'Specialite created') {
      this.tag.id = this.specialites[0].id + 1;
      const newSpec = new Specialite();
      newSpec.id = this.specialites[0].id + 1;
      newSpec.label = this.specialite.label;
      this.specialites.unshift(newSpec);
    }}, null, () => this.specialite = new Specialite() );

  }

  resetAlertOp() {
    this.alertOperation = '';
  }

  modifierSpecialite(specialite) {
    console.log('id et label ' + specialite.id + ' - ' + specialite.label);
  }

  supprimerSpecialite(specialite) {
    console.log('delete this shit ');
    this.specialiteService.deleteSpecialiteById(specialite.id).subscribe( resp => { this.alertOperation = resp.body;
       this.specialites.splice( this.specialites.indexOf(specialite), 1 ); });
  }
}
