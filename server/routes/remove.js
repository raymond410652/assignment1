module.exports = function(db,app,ObjectId){
    //link http
    app.post('/api/deleteitem',function(req,res){
        if(!req.body){
            return res.sendStatus(400);
        }
        // get from client side
        userID = req.body.userid;
       

        var objectid = new ObjectId(userID)
        const collection = db.collection('products');
        // delete data by id 
    
        collection.deleteOne({id:userID}, (err,docs)=>{
            collection.find({}).toArray((err,data)=>{
            //send back to client 
                res.send(data);

            });
            
        });
    })
}