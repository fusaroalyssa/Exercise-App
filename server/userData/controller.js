const express = require('express');
const {UserData, User, Exercise, Friend, Weight, Meal} = require('./model');

const userData = new UserData();

const app = express.Router();


//Home Page
app.get("/", function(req, res){
    res.send("Home Page");
})

//add a user to database
app.post("/users", function(req, res){
    const user = new User(req.body.name, req.body.email, req.body.password)
    userData.addUser(user);
    res.send(userData.user + " user added");
})

//display all users info in database
app.get("/users", function(req, res){
    const User = userData.login(req.body.name, req.body.fbid, req.body.access_token)
    res.send(User);
    //res.send(userData.users);
})


//get a user
app.get("/users/:name", (req, res) => {
    res.send(userData.getUser(req.params.name));
    //console.log(userData.getUser(req.params.name));
})


//add an exercise performed by a user
app.post("/users/exercise/:name", (req, res) => {
    const user = userData.getUser(req.params.name);
    const exercise = new Exercise(req.body.exName, req.body.hour, req.body.min, req.body.sec);
    res.send(user.addExercise(exercise));
})


//add a friend to a user
app.post("/users/friend/:name", (req, res) => {
    const user = userData.getUser(req.params.name);
    const friend = new Friend(req.body.name);
    res.send(user.addFriend(friend));
})

//add weight entry to a user
app.post("/user/weight/:name", (req, res) => {
    const user = userData.getUser(req.params.name);
    const weight = new Weight(req.body.date, req.body.weight);
    res.send(user.addWeight(weight));
})

//add meal to a user
app.post("/user/meal/:name", (req, res) => {
    const user = userData.getUser(req.params.name);
    const meal = new Meal(req.body.date, req.body.mealTime, req.body.food);
    res.send(user.addMeal(meal));
})


module.exports = app;