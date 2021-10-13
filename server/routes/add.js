module.exports = function(db,app){
    app.post('/api/add',function(req,res){
        if (!req.body){
            return res.sendStatus(400)
        }
        user = req.body;
        console.log(user)
        const collection = db.collection('products');
        collection.find({'id':user.id}).count((err,count)=>{
            if(count==0){
                collection.insertOne(user,(err,dbres)=>{
                    console.log(count)
                    if(err)throw err;
                    let num =dbres.insertedCount;
                    res.send({'num':num,err:null});
                })
            }else{
                res.send({num:0,err:'duplicate item'});
            }
        });
    });
}