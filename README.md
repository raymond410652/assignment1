#Git repository in the app
connect the git with my app. uploading each change with the commit to the git.com.
there have 3 version: the first one is the init version which means have not been coded yet. 
the second version upload the login page and third change upload the chat and server. 
all the sub branch was merged into main branch in the end.

#data stuctures
there have two main pages in the app, which are login page and chat page.
the login page the users can put their account and password in the client side and it will sent to the local storage pace.
in the chat page, the client side will show different caht group to selet. when users select one of group in client side, the data will send to the server side(socket.js)to record the login. finally, in client side, user can see which group they are login. 

#Angular architecture
##components:
there are five main components, including chat, login, account, app-routing, and Appcomponent.
##services:
in this app, we use the socket service to connet the server.
##models:
using the ngModels, HttpClientModule, FormsModle, and BrowserModel.

#Node server architecture:
server.js the main server to call socket.js and listen.js

#REST API
##socket.services
in the client side, we create the services to connect with the server side. 
in this app, there use the io to connect with the server url.using the emit to deliver the data and using the on to recevie the data. 
##socket.js
in the server, there have three variables which are rooms, socketRoom, and socketRoomnum.
rooms is to show how many room we have in the array.
socketRoom is to show which room is currently using in client side.
socketRoomnums is to show how many people are living in the same group. 
on the other hand, there have the mesaage parameter to get and sent the message.

##example
there is the example how server and client update the data
###message in server
socket.on('message',(message)=>{
                for(i=0; i<socketRoom.length;i++){
                    if (socketRoom[i][0]== socket.id){
                        chat.to(socketRoom[i][1]).emit('message',message);
                    }
                }
            });
            
###message in client service
 getMessage(next:any){
    this.socket.on('message',(message:any)=>next(message));
  }
###message in client
his.socketservice.getMessage((m:any)=>{this.messages.push(m)})

this is the example how receive the data in this app. the message will show in the html with {{message}}. 
