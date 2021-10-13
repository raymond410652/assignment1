import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserModel} from '../userModel'
import { BookService } from '../services/book.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  url= 'http://localhost:3000/';
  users :UserModel []=[]
  UserOrigin = JSON.parse(localStorage.getItem('user')||'{}');
  User= JSON.parse(localStorage.getItem('user')||'{}')
  constructor(private http: HttpClient,private bookService: BookService,private router:Router) { }

  ngOnInit(){
  
  }

 

}
