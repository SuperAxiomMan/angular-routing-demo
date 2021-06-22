import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ArchivesService extends DataService {
  url: string = 'http://localhost:3000/archives';
  constructor(http: HttpClient) {
    super(http);
  }
}
