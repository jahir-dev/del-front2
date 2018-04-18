import { Component, OnInit } from '@angular/core';
import { Specialite, Tag, Post } from '../../../models/data-model';
import { SpecialitesService } from '../../../core/specialites.service';
import { TagsService } from '../../../core/tags.service';
import { PostsService } from '../../../core/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  data: any;
  post: Post = new Post();
  tags: Tag[];
  tag: Tag = new Tag();
  alertOperation: String;
  error = false;
  errorMsg = 'Erreur de siasie';
  constructor(private tagsService: TagsService, private postsService: PostsService) { }

  ngOnInit() {
    this.tagsService.getAllTags().subscribe(tags => this.tags = tags);
  }

  resetAlertOp() {
    this.alertOperation = '';
  }

  ajouterPost() {
    if (!this.post.titre || this.post.titre.length <= 2 ) {
      this.error = true;
      this.errorMsg = 'Veuillez saisir un titre de post valide.';
      return;
    }
    if (!this.post.description || this.post.description.length <= 2 ) {
      this.error = true;
      this.errorMsg = 'Veuillez saisir un titre de post valide.';
      return;
    }
    if (!this.post.tags || this.post.tags.length < 1 ) {
      this.error = true;
      this.errorMsg = 'Veuillez selectionner des tags.';
      return;
    }
    this.error = false;
    this.errorMsg = '';

    console.log('dans ajouter post :' + JSON.stringify(this.post));
    this.postsService.createPost(this.post).subscribe( resp =>  { this.alertOperation = resp.body; },
       null, () => this.post = new Post() );

  }

  supprimerPost() {
    console.log('supprimer post');
  }

}
