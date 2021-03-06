var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", function(req,res,next){
    res.json(req.isAuthenticated());

});

router.get("/name", function(req,res,next){
    console.log("Hi class! ", req.isAuthenticated());

    if(req.isAuthenticated() === false){
      res.send(undefined);
    }

    var resUser = {
        username: req.user.username,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        datecreated: req.user.lastlogin
    };
    res.json(resUser);
});

module.exports = router;
