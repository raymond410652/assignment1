import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserModel } from '../userModel';



@Injectable({
  providedIn: 'root'
})

export class BookService {
  
  jsonItems:any = {};
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  
  

  add(user:UserModel){
    return this.http.post<any>('http://localhost:3000/api/add', user);
  }
  getlist(){
    return this.http.get<any>('http://localhost:3000/api/getlist');
  }
  getitem(userID:any){
    return this.http.post<any>('http://localhost:3000/api/getitem',{'userid':userID})
  }
  updateitem(user:UserModel){
    return this.http.post<any>('http://localhost:3000/api/update', user)

  }
  deleteitem(userID:any){
    return this.http.post<any>('http://localhost:3000/api/deleteitem',{'userid':userID})
  }
  checkvalidid(userID:any){
    return this.http.post<any>('http://localhost:3000/api/checkvalidid',{'userid':userID})
  }
  getproductcount(){
    return this.http.get<any>('http://localhost:3000/api/prodcount');
  }
  



}
