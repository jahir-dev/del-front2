import { Injectable } from '@angular/core';
import { Tag, Specialite } from '../models/data-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SpecialitesService {
  private specialitesUrl = 'http://localhost:8000/api/specialites';

  constructor(private http: HttpClient) { }

  logMe() {
    console.log('Hello from specialite service');
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'Jahir : backend server error');
    }
    return Observable.throw(error || 'Jahir : backend server error');
  }

  getAllSpecialites(): Observable<Specialite[]> {
    console.log('dans getAllSpecialites');
    return this.http.get(this.specialitesUrl)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  getSpecialiteById(specialiteID: string): Observable<Specialite> {
    return this.http.get(this.specialitesUrl + '/' + specialiteID)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  createSpecialite(specialite: Specialite): Observable<any> {
    console.log('dans createSpecialite = ' + specialite.label);
    return this.http.post(this.specialitesUrl, specialite , { observe: 'response', responseType: 'text' })
    .catch(error => this.handleError(error));
  }

  updateSpecialite(specialite: Specialite): Observable<any> {
    return this.http.put(this.specialitesUrl + '/' + specialite.id, specialite)
      .map((response) => {
        // this.showSnackBar('tag est modifié');
        return response;
      })
      .catch(error => this.handleError(error));
  }

  deleteSpecialiteById(id: any): Observable<any> {
    console.log('dans le service methode deleteSpecialiteById');
    const url = `${this.specialitesUrl}/${id}`;
    return this.http.delete(url, { observe: 'response', responseType: 'text' }).catch(error => this.handleError(error));
  }

}
