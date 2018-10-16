const express = require('express');
const {UserData, User} = require('./model');

const userData = new UserData();

const app = express.Router();



app.get("/", function(req, res){
    res.send("Home Page");
})

app.post("/users", function(req, res){
    const user = new User(req.body.name, req.body.email, req.body.password)
    userData.addUser(user);
    res.send(userData.user + " user added");
})

app.get("/users", function(req, res){
    res.send(userData.users);
})


module.exports = app;