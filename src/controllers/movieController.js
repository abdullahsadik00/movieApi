const repo = require("../repos/movieRepo");


module.exports.get = (req, res)=>{
    repo.get((movies)=>{
        return res.status(200).send(movies);
    })
}

module.exports.getById = (req, res)=>{
    repo.getByID(req.params.id,(movie)=>{
        return res.status(200).send(movie);
    });
}