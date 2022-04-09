import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    console.log(token);
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('token');
    this.router.navigate(['./homepage/home']);
  }

  // login({email, password}: any): Observable<any>{
  //   if(email === 'admin@gmail.com' && password === 'admin1234'){
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({name: 'Admin', email: 'admin@gmail.com'});
  //   }
  //   return throwError(new Error('Failed to login'));
  // }

  login(id: any): Observable<any>{
    this.setToken(id);
    return of(id);
  }

}
