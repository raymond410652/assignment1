module.exports = function(db,app){
    app.get('/api/prodcount',function(req,res){
        if(!req.body) {
            return res.sendStatus(400)
        }
        const collection = db.collection('products');
        collection.find({}).count((err,count)=>{
            res.send({'count':count});
        });

    });
}
