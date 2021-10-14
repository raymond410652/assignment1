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
    return this.http.post<any>('http://localhost:3000/api/add', user); //post adding data to server 
  }
  getlist(){
    return this.http.get<any>('http://localhost:3000/api/getlist'); //get the all data from server 
  }
  getitem(userID:any){
    return this.http.post<any>('http://localhost:3000/api/getitem',{'userid':userID}) //give the userID to get specific data
  }
  updateitem(user:UserModel){
    return this.http.post<any>('http://localhost:3000/api/update', user) // post the edit data to server to update 

  }
  deleteitem(userID:any){
    return this.http.post<any>('http://localhost:3000/api/deleteitem',{'userid':userID}) // post the delete request by id to server 
  }
  checkvalidid(userID:any){
    return this.http.post<any>('http://localhost:3000/api/checkvalidid',{'userid':userID}) //post the id to server to check valid
  }
  getproductcount(){
    return this.http.get<any>('http://localhost:3000/api/prodcount'); // to get the count 
  }
  



}
