import { Injectable } from '@angular/core';
import { Post, Specialite, Tag } from '../models/data-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {

  private postsUrl = 'http://localhost:8000/api/posts';
  private responseUrl = 'http://localhost:8000/api/reponse';

  constructor(private http: HttpClient) { }

  logMe() {
    console.log('Hello from posts service');
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'Jahir : backend server error');
    }
    return Observable.throw(error || 'Jahir : backend server error');
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  getPostById(postId: string): Observable<Post> {
    return this.http.get(this.postsUrl + '/' + postId)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  createPost(post: Post): Observable<any> {
    console.log('dans createPost  :' + JSON.stringify(post));
    return this.http.post(this.postsUrl, post , { observe: 'response', responseType: 'text' })
    .catch(error => this.handleError(error));
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl + '/' + post.id, post)
      .map((response) => {
        // this.showSnackBar('post est modifié');
        return response;
      })
      .catch(error => this.handleError(error));
  }

  deletePostById(id: any): Observable<any> {
    console.log('dans le service methode deletePostById');
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete(url, { observe: 'response', responseType: 'text' }).catch(error => this.handleError(error));
  }

  responseToPost(id_post: number, id_medecin: number, reponse: string): Observable<any> {
    console.log('dans le service post methode responseToPost');
    return this.http.post(this.responseUrl,
       { 'post' : id_post, 'medecin' : id_medecin, 'reponse' : reponse },
       { observe: 'response', responseType: 'text' })
    .catch(error => this.handleError(error));
  }

}
