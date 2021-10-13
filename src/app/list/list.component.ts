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
  Users : UserModel[]=[]
  constructor(private bookService: BookService,private router:Router) { }

  ngOnInit(): void {
    this.bookService.getlist().subscribe((data)=>{
      console.log(data)
      this.Users = data
   })
  }

  deleteuser(id:any){
    if(confirm("Sure to delete?")){
      this.bookService.deleteitem(id).subscribe((data)=>{
        console.log(id)
        this.Users = data
  
      })
    }
  }


}
