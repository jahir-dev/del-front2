import { Injectable } from '@angular/core';
import { Tag } from '../models/data-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TagsService {
  private tagsUrl = 'http://localhost:8000/api/tags';

  constructor(private http: HttpClient) { }

  logMe() {
    console.log('Hello from tag service');
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'Jahir : backend server error');
    }
    return Observable.throw(error || 'Jahir : backend server error');
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get(this.tagsUrl)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  getTagById(tagId: string): Observable<Tag> {
    return this.http.get(this.tagsUrl + '/' + tagId)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  createTag(tag: Tag): Observable<any> {
    console.log('dans createTag = ' + tag.label);
    return this.http.post(this.tagsUrl, {label: tag.label}, { observe: 'response', responseType: 'text' })
    .catch(error => this.handleError(error));
  }

  // createTag(tag: any): Observable<Tag> {
  //   console.log('dans createTag = ' + tag.label);
  //   return this.http.post(this.tagsUrl, {label: tag.label}).subscribe()
  //     .map(response => {
  //       console.log('Reponse serveur ');
  //       // this.showSnackBar('tag est créé');
  //       console.log('Reponse serveur : ' + response);
  //       return response;
  //     })
  //     .catch(error => this.handleError(error));
  // }
  updateTag(tag: Tag): Observable<any> {
    return this.http.put(this.tagsUrl + '/' + tag.id, tag)
      .map((response) => {
        // this.showSnackBar('tag est modifié');
        return response;
      })
      .catch(error => this.handleError(error));
  }

  deleteTagById(id: any): Observable<any> {
    console.log('dans le service methode deleteTagById');
    const url = `${this.tagsUrl}/${id}`;
    return this.http.delete(url, { observe: 'response', responseType: 'text' }).catch(error => this.handleError(error));
  }

}
