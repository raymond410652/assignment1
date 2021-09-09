import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


let key = 'Item 1';
localStorage.setItem(key, 'Value');
let myItem = localStorage.getItem(key);
localStorage.setItem(key, 'New Value');
localStorage.removeItem(key);
@Injectable({
  providedIn: 'root'
})

export class BookService {
  url = "";
  jsonItems:any = {};
  
  constructor(private http: HttpClient) { }

  
  
  setItem(key:any,item:any){
    this.jsonItems[key] = item;
  }

  getItem(key:any){
    return this.jsonItems[key];
  }
  
  



}
