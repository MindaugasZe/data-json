import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://jsonplaceholder.typicode.com';
  itemDetail!: any;
  data: any;
  newPost:any;

  constructor(private http: HttpClient ) { }

  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }
}
