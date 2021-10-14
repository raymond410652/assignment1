module.exports = function(db,app,ObjectId){
    var result;
    // link correctly 
    app.post('/api/update',function(req,res){
        if(!req.body){
            return res.sendStatus(400)

        }
        // get from client side 
        user =req.body;
        
        
        const collection = db.collection('products');
        //update the new data
        collection.updateOne({'id':user.id},{$set:{name:user.name,pwd:user.pwd,email:user.email}},()=>{
            res.send({'ok':user.id})
        })
    })
}