import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

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
