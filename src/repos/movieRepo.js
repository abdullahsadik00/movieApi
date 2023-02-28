const mongodb = require("../config/mongodb");

module.exports.get = async (cb)=>{
    console.log("sd");
    const collection = mongodb.getCollection("movies");
    try{
        var movies = await collection.find().toArray();
        console.log(movies);
    }
    catch(err){
        console.log(err);
    }
    return cb(movies);
}