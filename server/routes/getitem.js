module.exports = function(db,app,ObjectId){
    app.post('/api/getitem',function(req,res){
        
        if (!req.body){
            return res.sendStatus(400)
        } 

        userID = req.body.userid;
        console.log(req.body)
       
            //var objectid = new ObjectId(productID)
            
        const collection = db.collection('products');
            collection.find({id:userID}).limit(1).toArray((err,docs)=>{
                
                res.send(docs);
            })
    })
}


