const express = require('express');
const {UserData, User, Exercise, Friend, Weight, Meal} = require('./model');

const userData = new UserData();

const app = express.Router();


//Home Page
app.get("/", function(req, res){
    res.send(...userData);
})


//add a user to database

app.post("/users", function(req, res){
    //const user = new User(req.body.name, req.body.email, req.body.password)
    const user = userData.login(req.body.name, req.body.fbid, req.body.access_token)
    //userData.addUser(user);
    res.send(user);
})


//add user with facebook
/*
app.post("/users", (req, res) => {
    const user = userData.login(req.body.name, req.body.fbid, req.body.access_token)
    res.send(user);
})*/

//display all users info in database
app.get("/users", function(req, res){
    /*const User = userData.login(req.body.name, req.body.fbid, req.body.access_token)
    res.send(User);*/
    res.send(userData.users);
})


//get a user
app.get("/users/:fbid", (req, res) => {
    res.send(userData.getUser(req.params.fbid));
    //console.log(userData.getUser(req.params.name));
})


//add an exercise performed by a user
app.post("/users/exercise/:fbid", (req, res) => {
    const user = userData.getUser(req.params.fbid);
    const exercise = new Exercise(req.body.date, req.body.exName, req.body.hour, req.body.min, req.body.sec);
    res.send(user.addExercise(exercise));
})

//get user exercise
app.get("/user/exercise/:fbid", (req, res) => {
    res.send( (userData.getUser(req.params.fbid)).getExercise() );
})


//add weight entry to a user
app.post("/user/weight/:fbid", (req, res) => {
    const user = userData.getUser(req.params.fbid);
    const weight = new Weight(req.body.date, req.body.weight);
    res.send(user.addWeight(weight));
})

//get user weights
app.get("/user/weight/:fbid", (req, res) => {
    const user = userData.getUser(req.params.fbid);
    console.log(user);
    res.send( user.getWeight() );
})



//add meal to a user
app.post("/user/meal/:fbid", (req, res) => {
    const user = userData.getUser(req.params.fbid);
    const meal = new Meal(req.body.date, req.body.mealTime, req.body.food);
    res.send(user.addMeal(meal));
})

//get user meals
app.get("/user/meal/:fbid", (req, res) => {
    res.send( (userData.getUser(req.params.fbid)).getMeal() );
})


//get user friends
app.get("/user/friends/:fbid", (req, res) => {
    res.send( (userData.getUser(req.params.fbid)).getFriends() );
})

//add a friend to a user
app.post("/user/friends/:fbid", (req, res) => {
    const user = userData.getUser(req.params.fbid);
    const friend = new Friend(req.body.fbid);
    res.send(user.addFriend(friend));
})


module.exports = app;