import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {UserModel} from '../userModel'
import { BookService } from '../services/book.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // to make the initial data 
  users: UserModel[] = [];
  useridparam:any;
  username:string = "";
  userpwd:string = "";
  useremail:string = "";
  userid:number = 0;
  userobjid:string= "";

  constructor(private http: HttpClient,private bookService: BookService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // define the different param by id
    this.route.paramMap.subscribe((params)=>{
      console.log(params)
      this.useridparam = Number(params.get('user.id'));
    
      
    })
    // to import function from service and make it get the correct data by id 
    this.bookService.getitem(this.useridparam).subscribe((data)=>{
      console.log(data)
      this.userid = data[0].id;
      
      this.username = data[0].name;
      
      this.userpwd = data[0].pwd;
      this.useremail = data[0].email;
     
      this.userobjid=data[0]._id;
  })
}
//update the data 
update(){
  var user:UserModel = new UserModel("",this.userid,this.username,this.userpwd,this.useremail)
  this.bookService.updateitem(user).subscribe((data)=>{
    this.router.navigate(['/list'])
  })
}
}
