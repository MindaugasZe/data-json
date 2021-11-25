import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemDetail!: any;
  data: any;
  newPost:any;

  constructor(
    public api: ApiService 
  
  ) { }

 
}
