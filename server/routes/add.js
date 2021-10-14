module.exports = function(db,app){
    // link to correct url
    app.post('/api/add',function(req,res){
        if (!req.body){
            return res.sendStatus(400)
        }
        // get from client side 
        user = req.body;
        console.log(user)
        // make collection 
        const collection = db.collection('products');
        //find data by id
        collection.find({'id':user.id}).count((err,count)=>{
            //insert to database  
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