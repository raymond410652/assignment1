module.exports = function(db,app,ObjectId){
    // link correct url 
    app.post('/api/getitem',function(req,res){
        
        if (!req.body){
            return res.sendStatus(400)
        } 
        // userID from client side 
        userID = req.body.userid;
        console.log(req.body)
       
            
        // make collection     
        const collection = db.collection('products');
        // find data by id 
            collection.find({id:userID}).limit(1).toArray((err,docs)=>{
                
                res.send(docs);
            })
    })
}


