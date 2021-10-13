module.exports = function(db,app,ObjectId){
    var result;
    app.post('/api/update',function(req,res){
        if(!req.body){
            return res.sendStatus(400)

        }
        user =req.body;
        
        
        const collection = db.collection('products');
        collection.updateOne({'id':user.id},{$set:{name:user.name,pwd:user.pwd,email:user.email}},()=>{
            res.send({'ok':user.id})
        })
    })
}