import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string='https://reqres.in/api/users'
  constructor(private http:HttpClient) { }
  onecomponent(){
     return this.http.get(this.baseUrl);
  }
}
