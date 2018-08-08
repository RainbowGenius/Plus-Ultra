import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLastestMovie() {
    return this.http.get(this.baseApiPath+"/movie/popular?api_key="+this.getApiKey())
    // return this.http.get(`${this.baseApiPath}/movie/353081?api_key=${this.getApiKey()}`)
  }

  getApiKey(): string {
    return '24086e8d024f14bf9dab7272670b148b';
  }
}
