import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private readonly urlPrefix = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.urlPrefix + url, this.getRequestOptions());
  }
  post(url: string, data: object) {
    return this.http.post(this.urlPrefix + url, data, this.getRequestOptions());
  }
  put(url: string, data: object) {
    return this.http.put(this.urlPrefix + url, data, this.getRequestOptions());
  }
  delete(url: string) {
    return this.http.delete(
      `${this.urlPrefix}${url}`,
      this.getRequestOptions()
    );
  }
  private getRequestOptions() {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };
    return {
      headers,
    };
  }
}
