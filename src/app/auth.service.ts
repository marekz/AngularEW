import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import authParameters from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private baseOptions:RequestOptions) { }

  getToken(){

    var token = localStorage.getItem('token');

    if(!token){
      var match = window.location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
      localStorage.setItem('token', token);  
    }

    if(!token){
      this.authorize();
    }

    this.baseOptions.headers.set('Authorization', 'Bearer ' + token);

    return token;
  }

  authorize(){
    localStorage.removeItem('token');

    let client_id = authParameters[0]['client_id'];
    let redirect_uri = authParameters[0]['redirect_uri'];
    
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`);
  }
}
