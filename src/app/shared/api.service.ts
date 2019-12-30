import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiEndpoint = ' https://itunes.apple.com/us/rss/topalbums/limit=100/json';

  getTop100Songs(): Observable<any> {
    return this.http.get(this.apiEndpoint);
  }
}
