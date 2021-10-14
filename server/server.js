const express = require('express'); 
const app =express();
const cors =require('cors');
const MongoClient = require('mongodb').MongoClient; // get mongo db 
var ObjectId = require('mongodb').ObjectId; // get objid from mongo db 
const url = 'mongodb://localhost:27017'; // the url of mongo db 

const path = require('path');
const http = require ('http').Server(app); // get the http 
const io = require('socket.io')(http,{    // socket.io connect to client side 
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
    }
});
const sockets =require('./socket.js');
const socket2 =require('./sockettwo.js');
const server = require('./listen.js');



const PORT=3000;


app.use(cors());
app.use(express.json());




// connect to socket.js 

sockets.connect(io,PORT);
socket2.connect(io,PORT)
// connect to mongo db and router 
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},function(err, client){
    if (err) {return console.log(err)}
        const dbName = 'userdb';
        const db = client.db(dbName);
        require('./routes/add.js')(db,app)
        require('./routes/remove.js')(db,app,ObjectId);
        require('./routes/update.js')(db,app,ObjectId);
        require('./routes/read.js')(db,app);
        require('./routes/validid.js')(db,app);
        require('./routes/prodcount.js')(db,app);
        require('./routes/getitem.js')(db,app,ObjectId);

    
;})
// connect to listen.js 
server.listen(http,PORT);
