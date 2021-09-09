import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import {HttpHeaders, HttpParams} from "@angular/common/http";

  let key = 'Item 1';
  localStorage.setItem(key, 'Value');
  let myItem = localStorage.getItem(key);
  localStorage.setItem(key, 'New Value');
  localStorage.removeItem(key);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bookService: BookService) { }
  username = '';
  password='';
  
  setItem(){
    this.bookService.setItem(this.username, this.password);
    console.log(this.bookService.jsonItems);
  }

  ngOnInit(): void {
  }

  
}
