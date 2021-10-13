import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../userModel';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  users : UserModel []=[]
  constructor(private userService: BookService, private router: Router) { }

  ngOnInit(): void {
  
  }


}
