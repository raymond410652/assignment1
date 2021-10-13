module.exports = function(db,app){
    app.post('/api/checkvalidid', function(req,res){
        
        if(!req.body){
            return res.sendStatus(400)
        }
        user = req.body;
        
        const collection = db.collection('products');
        collection.find({'id':user}).count((err,count)=>{
            console.log(count)
            if (count==0){
                res.send({success:1,topnum:0});
            }else{
                collection.find({},{sort:{id:-1},limit:1}).toArray(function(err,items){
                    res.send({success:0,topnum:items[0].id})
                });
            }
    });
    });
}