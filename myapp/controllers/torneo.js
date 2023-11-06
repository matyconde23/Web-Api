var Torneo = require("../models/torneo");


exports.torneo_list = function(req, res){
    res.render('torneos/index', {torneos: Torneo.allTorneos});
}

exports.torneo_create_get = function(req,res){
    res.render('torneos/create')
}

exports.torneo_create_post = function (req, res){
    var torneo = new Torneo(req.body.id, req.body.nombre, req.body.lugar, req.body.categoria)
    Torneo.add(torneo)

    res.redirect('/torneos')
}

exports.torneo_delete_post = function (req,res){
    Torneo.removeById(req.body.id);

    res.redirect('/torneos')
}

