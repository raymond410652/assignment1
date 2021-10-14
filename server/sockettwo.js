
module.exports = {
    
    connect: function (io,PORT){
        const chat = io.of('/api/chat2');
        chat.on('connection',(socket)=>{
            console.log('user connection on port'+PORT+':'+socket.id);

            socket.on('message',(message)=>{
                chat.emit('new-message',message);
            })
        });
    }
}