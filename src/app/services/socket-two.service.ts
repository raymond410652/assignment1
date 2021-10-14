import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import io from 'socket.io-client';


const SERVER_URL = 'http://localhost:3000/api/chat2';

@Injectable({
  providedIn: 'root'
})
export class SocketTwoService {
  public socket:any;

  constructor() { 
  }
  initSocket(){
    this.socket = io(SERVER_URL);
    return ()=>{this.socket.disconnect();}
  }

  send(message:string):void{
    this.socket.emit('message',message);
  }

  getMessages(){
    return new Observable((observer)=>{
      this.socket.on('new-message',(message:any) => {observer.next(message);
      });
    });
  }
}

