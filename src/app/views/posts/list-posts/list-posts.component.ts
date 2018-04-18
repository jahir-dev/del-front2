import { Component, OnInit } from '@angular/core';
import { Specialite, Tag, Post } from '../../../models/data-model';
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

}
