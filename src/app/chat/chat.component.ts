import { Component, OnInit } from '@angular/core';
import{SocketService} from '../services/socket.service';

const SERVER_URL = "http://localhost:3000/api/chat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  messagecontent:string ="";
  messages:string[]=[];
  rooms = [];
  roomslist:string="";
  roomnotice:string="";
  currentroom:string="";
  isinRoom=false;
  newroom:string="";
  numusers:number=0;
  constructor(private socketservice:SocketService) { }

  ngOnInit(){
    this.socketservice.initSocket();
    this.socketservice.getMessage().subscribe((message:any) => {
      console.log(message)
      this.messages.push(message);});
    
    this.socketservice.reqroomList();
    this.socketservice.getroomList((msg:any)=>{this.rooms = JSON.parse(msg)});
    this.socketservice.notice((msg:any)=>{this.roomnotice = msg});
    this.socketservice.joined((msg:any)=>{this.currentroom = msg
      if (this.currentroom != ""){
        this.isinRoom=true;

      }else{
        this.isinRoom = false;
      }
    
    });

  }

  joinroom(){
    this.socketservice.joinroom(this.roomslist);
    this.socketservice.reqnumusers(this.roomslist);
    this.socketservice.getnumusers((res:any)=>(this.numusers=res));
  }
  clearnotice(){
    this.roomnotice ="";
  }
  leaveroom(){
    this.socketservice.leaveroom(this.currentroom)
    this.socketservice.reqnumusers(this.currentroom);
    this.socketservice.getnumusers((res:any)=>(this.numusers = res));
    this.roomslist = "";
    this.currentroom = "";
    this.isinRoom = false;
    this.numusers = 0;
    this.roomnotice = "";
    this.messages = [];
  }

  createroom(){
    console.log(this.createroom);
    this.socketservice.createroom(this.newroom);
    this.socketservice.reqroomList();
    this.newroom = "";
  }
  chat(){

    if(this.messagecontent){
    this.socketservice.sendMessage(this.messagecontent);
    this.messagecontent = "";

    }else{
    console.log("no message")
    }
}

}
