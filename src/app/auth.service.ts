import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
  login(){
    console.log('Login method called');
    localStorage.setItem('token','your-token')
  }
}
