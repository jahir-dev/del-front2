import { Component, OnInit } from '@angular/core';
import { Specialite, Tag, Post, Medecin } from '../../../models/data-model';
import { SpecialitesService } from '../../../core/specialites.service';
import { TagsService } from '../../../core/tags.service';
import { PostsService } from '../../../core/posts.service';


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  data: any;
  posts: Post[];
  specialites: Specialite[];
  tags: Tag[];
  tag: Tag = new Tag();
  specialite: Specialite = new Specialite();
  label = 'test';
  alertOperation: String;
  error = false;
  errorMsg = 'Erreur de siasie';

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  resetAlertOp() {
    this.alertOperation = '';
  }

  ajouterReponse(post: Post) {
    console.log('la reponse : ' + post.nouv_reponse + '----- /n post  : ' + JSON.stringify(post));
    if (!post.nouv_reponse || post.nouv_reponse.length <= 5 ) {
      this.error = true;
      this.errorMsg = 'Veuillez saisir une reponse pertinante.';
      return;
    }
    this.error = false;
    this.errorMsg = '';

    console.log('dans ajouter tag');
    this.postsService.responseToPost(post.id, 1, post.nouv_reponse).subscribe( resp =>  { this.alertOperation = resp.body;
      if ( resp.body === 'Reponse ajoutée.') {
      console.log('dans if reponse ajoutée');
      const  index = this.posts.findIndex( p => p.id === post.id);
      const medecin = new Medecin();
      medecin.nom = 'Admin';
      console.log('medecin : ' + JSON.stringify(medecin));
      medecin.pivot.reponse = post.nouv_reponse;
      medecin.pivot.created_at = 'il y\'a quelque seconde';
      this.posts[index].medecins.push(medecin) ;
      console.log('fin');
    }});
    // }}, null, () => this.specialite = new Specialite() );

  }

}
