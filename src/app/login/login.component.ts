import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { UserModel } from '../userModel';

  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: UserModel[] = [];
  useridparam:any;
  username:string = "";
  userpwd:string = "";
  useremail:string = "";
  userid:number = 0;
  userobjid:string= "";
  errormsg:string="this pwd is not"
  constructor(private http: HttpClient,private bookService: BookService,private router:Router,private route:ActivatedRoute) { }

  


  ngOnInit(): void {
    // to nevigate the exact page by id 
    this.route.paramMap.subscribe((params)=>{
      console.log(params)
      this.useridparam = Number(params.get('user.id'));
    })
    // to get the data by id 
    this.bookService.getitem(this.useridparam).subscribe((data)=>{
      console.log(data)
      this.userid = data[0].id;
      
      this.username = data[0].name;
      
      this.userpwd = data[0].pwd;
      this.useremail = data[0].email;
     
      this.userobjid=data[0]._id;
    })
  }
  // to give auth for login 
logIn(event:any){
  event.preventDefault();
  this.bookService.getitem(this.useridparam).subscribe((data)=>{
  if(this.username == data[0].name){
    this.router.navigate(["/chat"])
  }else{
    this.errormsg
  }
})  
}

}
