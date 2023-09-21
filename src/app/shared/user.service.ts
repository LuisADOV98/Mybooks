import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = "http://localhost:3000";
  public logueado:boolean
  public user:User


  constructor(private http: HttpClient){
    this.logueado = false
  }

  public register(newUser: User){
    return this.http.post(this.url+"/register",newUser)
}
  public login(nUser: User):Observable<object>{
    return this.http.post(this.url+"/login", nUser)
  }

  public editProfile(editUser:User){
    return this.http.put(this.url + "/profile", editUser)
  }

  yaLogueado(){
    return this.logueado
  }
  
}

