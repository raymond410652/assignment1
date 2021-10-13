const express = require('express');
const app =express();
const cors =require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
const url = 'mongodb://localhost:27017';

const path = require('path');
const http = require ('http').Server(app);
const io = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
    }
});
const sockets =require('./socket.js');
const server = require('./listen.js')


const PORT=3000;


app.use(cors());
app.use(express.json());






sockets.connect(io,PORT);


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

server.listen(http,PORT);
