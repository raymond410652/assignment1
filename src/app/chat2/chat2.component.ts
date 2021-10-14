import { Component, OnInit } from '@angular/core';
import { SocketTwoService } from '../services/socket-two.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {
  messagecontent: string="";
  messages:string[] = [];
  ioConnection:any;

  constructor(private sockettwo:SocketTwoService) { }

  ngOnInit() {
    this.sockettwo.initSocket();
    this.sockettwo.getMessages().subscribe((message:any) => { this.messages.push(message);
    console.log(message)
    });
    
  }

  chat(){

    if(this.messagecontent){
    this.sockettwo.send(this.messagecontent);
    this.messagecontent == null;

    }else{
    console.log("no message")
    }
}
}
