## version3 branch 
this version3 is my asssignment 2 working branch. since most of my work was working in my local computer, there were only have few commit in the git hub. the init commit included most of my work, but have some error want to ask question for teacher. 

## git repository layout
for my repository layout in the git was expeted to have many branch that include different version of my app and many commit to make audience understand what i add in each version. however, since most of my works was working in my local place and did not connect to the git, there only have two branches in the this repository, which are main and version3.

* branch main: it is the phase 1 of my work, which focusing on saving the data the the local storage.
   * For the phase1, I was fail to set up the user admin in my app and only provide the chat interface.
   * the readme file in the main branch is used to define my app as the documentation in the phase1.

* version3: it is the phase 2 of my work, which using the mongo db to save the data. 
  * For the phase2, I add the user admin and connect it to the chat interface. 
  * the version3 readme file talk about the phase2 documentation.



## data stucture
### user 
in my app, the user was presented as the list to show the username, password, and email. in the end od each line of the list, have three button which are edit, delete, and chat. 

* The edit button can be used to update new data the server storage. 

* The delete button can be used to delte the user. 

* The chat button is the link to the chat interface. 

All of the user detail are saved in the mongodb.  


### group

for the group, there have list of room for user join in user can sent the message to each others in the same room.

in this case, i used the socket to make user can login at the same time and avalible to sent data to each other.

## Rest API
### client side:
in the client side server, the api was below:
|funcion name|return value|use place|
|----|----|----|
|add(user:Usermodel)| return this.http.post<any>('http://localhost:3000/api/add', user)|use to send the data to add.js in router|
|getlist()|return this.http.get<any>('http://localhost:3000/api/getlist');| use to get the all of added data from mongodb and list in the page|
|getitem(userID:any)| return this.http.post<any>('http://localhost:3000/api/getitem',{'userid':userID})|to post the userID in server and than find that id in server|
|updateitem(user:UserModel)| return this.http.post<any>('http://localhost:3000/api/update', user)|to post a user detail to update.js, in order to update data in database|
|deleteitem(userID:any)|return this.http.post<any>('http://localhost:3000/api/deleteitem',{'userid':userID})| post the user id in deleteitem.js to dp the delete action in server side|
|checkvalidid(userID:any)|return this.http.post<any>('http://localhost:3000/api/checkvalidid',{'userid':userID})| post the userid to api/checkvalidid and to some work in server|
|getproductcount()|return this.http.get<any>('http://localhost:3000/api/prodcount');|get the count from server side

