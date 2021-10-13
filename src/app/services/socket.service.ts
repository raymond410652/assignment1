import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import {Observable} from 'rxjs';

const SERVER_URL ='http://localhost:3000/api/chat'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket:any;
  constructor() { }
  initSocket(): void{
    this.socket = io(SERVER_URL)
  }

  joinroom(selroom:any):void{
    this.socket.emit("joinRoom",selroom)
  }
  leaveroom(selroom:any):void{
    this.socket.emit("leaveRoom",selroom)
  }
  joined(next:any):void{
    this.socket.on("joined",(res:any)=>next(res))
  }
  createroom(newroom:any):void{
    this.socket.emit('newroom',newroom)
  }
  reqnumusers(selroom:any):void{
    this.socket.emit('numusers',selroom)
  }
  getnumusers(next:any):void{
    this.socket.on('numusers',(res:any)=>next(res))
  }
  reqroomList():void{
    this.socket.emit('roomlist','list please');

  }
  getroomList(next:any):void{
    this.socket.on('roomlist',(res:any)=>next(res))
  }
  notice(next:any):void{
    
    this.socket.on('notice',(res:any)=>next(res))
    
  }
  sendMessage(message:string):void{
    this.socket.emit('message',message);

  }
  getMessage(){
    return new Observable((observer)=>{
      this.socket.on('new-message',(message:any) => {observer.next(message);
      });
    });
  }
}
