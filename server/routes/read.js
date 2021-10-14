
module.exports = function(db,app) {
    //the correct link for http 
  
    app.get('/api/getlist',function(req,res){
        // make collection 
        const collection =db.collection('products');
        // find all data and send to client side
        collection.find({}).toArray((err,data)=>{
            console.log(data)
            res.send(data);
        })
    })
}

