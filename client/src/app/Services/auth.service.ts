import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);

  constructor(private http:HttpClient) { 
    if(localStorage.getItem('token')){
      this.authenticationState.next(true)
    }
  }

  contacto(data:any){
    return this.http.post(environment.endpoint+"/contacto",data)
  }

  login(data:any){
    return this.http.post(environment.endpoint+"/users/login",data)
  }
  registro(data:any){
    return this.http.post(environment.endpoint+"/users",data)
  }
  logout(){
    localStorage.removeItem('token');
    this.authenticationState.next(false)
  }
  authenticate(){
    //Cambiar el estado a true
    this.authenticationState.next(true)
  }
  isAuthenticate(){
    //Retornar estado del login 
    return this.authenticationState
  }
  isAuthenticated(){
    //Retornar estado del login 
    return this.authenticationState.value
  }
}
