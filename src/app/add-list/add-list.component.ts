import { Component, OnInit } from '@angular/core';
import{trigger, state,style,animate,transition} from '@angular/animations'
import { UserModel } from '../userModel';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
  animations:[
    trigger('iderrorState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show =>hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),
    ]),
    trigger('noticeState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),
    ])
  ]
})
export class AddListComponent implements OnInit {
  // give the initial data of each input item 
  username:string ="";
  userpwd:string="";
  useremail:string="";
  userid:number = 0 ;
  userobjid:string="";
  //to initialize the new template
  newuser:UserModel = new UserModel("",0,"","","");
  
  newProductMessage="";
  //define the error situation 
  iderrormsg:string="This is already exists # new id is required"
  iderrormsg2:string="";
  iderrorshow:boolean=false;
  noticeshow:boolean = false;

  constructor(private bookservice:BookService, private router:Router) { }

  ngOnInit(): void {
  }
  //define the fuction to show the hide data 
  get stateName(){
    return this.iderrorshow ?'show':'hide';
  }
  get noticeName(){
    return this.noticeshow ? 'show': 'hide';
  }
  //function to add user admin
  addnewUser(event:any){
    event.preventDefault();
    // id = 0 will show error message 
    if(this.userid ==0){
      this.iderrorshow = !this.iderrorshow;
    }else{
      // define the newuser to get the data 
      this.newuser = new UserModel("",this.userid,this.username,this.userpwd,this.useremail);
      // from client-serverice side import the add function to get the data from server side
      this.bookservice.add(this.newuser).subscribe((data)=>{
        
        this.noticeshow =true;
        if(data.err ==0){
          this.newProductMessage = data.num + "new product (" + this.username+") was added";
        }else{
          this.newProductMessage = data.err;
        }
        // after adding data, the all input bar become null 
        this.userid == null;;
        this.username="";
        this.userpwd="";
        this.useremail ="";
        this.router.navigate(['/list'])

      })
    }
  }
  //function to check the add id is not the same  
  checkvalidid(event:any){
    this.noticeshow = false
    this.bookservice.checkvalidid(event).subscribe((data)=>{
      if (data.success ==0){
        this.iderrormsg2= "something above" + data.topnum;
        this.iderrorshow = !this.iderrorshow;
      }else{
        this.iderrorshow = false;
        this.iderrormsg2 == null;
      }
    })
  }
}


