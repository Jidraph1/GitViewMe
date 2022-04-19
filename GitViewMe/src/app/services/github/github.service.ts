import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string = "Jidraph1";

  constructor(private httpClient: HttpClient) { 
    
    getUser():Promise
  }
}
