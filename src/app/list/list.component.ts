import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { UserModel } from '../userModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // define UserModel
  Users : UserModel[]=[]
  constructor(private bookService: BookService,private router:Router) { }

  ngOnInit(): void {
    // import function from service to get the data 
    this.bookService.getlist().subscribe((data)=>{
      console.log(data)
      this.Users = data
   })
  }

  deleteuser(id:any){
    // to import the delete funtion from service and make delete fuction is working
    if(confirm("Sure to delete?")){
      this.bookService.deleteitem(id).subscribe((data)=>{
        console.log(id)
        this.Users = data
  
      })
    }
  }


}
