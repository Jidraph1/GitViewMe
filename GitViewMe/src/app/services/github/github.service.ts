import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './../../models/user';
import { Repo } from 'src/app/models/repo';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string = "Jidraph1";


  constructor(private http: HttpClient) {
   }

   getUser() {
    return this.http.get(`https://api.github.com/users/${this.username}`)
  .subscribe
  }

  getRepos() {
    return this.http.get<Repo[]>('https://api.github.com/users/' + this.username+'/repos')
    .subscribe

    // lastValueFrom
  }

  updateUsername(username: string) {
this.username = username;
  }
}
