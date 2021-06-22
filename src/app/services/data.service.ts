import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = '';

  constructor(private http: HttpClient) {}

  createEntity(entity: any): Observable<Object> {
    return this.http
      .post(this.url, entity)
      .pipe(retry(1), catchError(this.handleError));
  }

  loadEntity(): Observable<Object> {
    return this.http.get(this.url);
  }

  updateEntity(entity: any): Observable<Object> {
    return this.http.patch(`${this.url}/${entity.id}`, entity);
  }

  deleteEntity(entity: any): Observable<Object> {
    return this.http.delete(`${this.url}/${entity.id}`);
  }

  getById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error', error.error.message);
    } else {
      console.log('Backend Error', error.status);
    }
    return throwError('Something Wrong Happened!');
  }
}
