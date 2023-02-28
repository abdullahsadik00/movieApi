const repo = require("../repos/movieRepo");


module.exports.get = (req, res)=>{
    repo.get((movies)=>{
        return res.status(200).send(movies);
    })
}