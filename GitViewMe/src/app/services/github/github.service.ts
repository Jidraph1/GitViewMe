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


  constructor(private httpClient: HttpClient) {
   }

   getUser(username : string){
    return this.httpClient.get(`https://api.github.com/users/${username}`)

    // return this.httpClient.get<User>(`https://api.github.com/users/${this.username}`)
    // .toPromise();
  }

  getRepos(username : string){
    return this.httpClient.get('https://api.github.com/users/' + this.username+'/repos')
    
    // return this.httpClient.get<User>(`https://api.github.com/users/${this.username}`)
    // .toPromise();

    // lastValueFrom
  }

  updateUsername(username: string) {
this.username = username;
  }
}
