module.exports = function(db,app,ObjectId){
    app.post('/api/deleteitem',function(req,res){
        if(!req.body){
            return res.sendStatus(400);
        }

        userID = req.body.userid;
       

        var objectid = new ObjectId(userID)
        const collection = db.collection('products');

        collection.deleteOne({id:userID}, (err,docs)=>{
            collection.find({}).toArray((err,data)=>{
            
                res.send(data);

            });
            
        });
    })
}