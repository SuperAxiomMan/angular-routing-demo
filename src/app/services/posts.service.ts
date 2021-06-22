import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends DataService {
  url:string='http://localhost:3000/posts';
  constructor(http: HttpClient) {
    super(http);
  }
}
