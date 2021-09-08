import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  jsonItems:any = {};
  
  setItem(key:any,item:any){
    this.jsonItems[key] = item;
  }

  getItem(key:any){
    return this.jsonItems[key];
  }
  constructor() { }
}
