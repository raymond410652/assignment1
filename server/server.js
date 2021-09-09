const express = require('express');
const app =express();
const cors =require('cors');

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
server.listen(http,PORT);