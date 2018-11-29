class UserData
{
    constructor()
    {
        this.users = [];
    }

    addUser(user)
    {
        this.users.push(user);
    }

    getUser(fbid)
    {
        var index = this.users.findIndex(user => user.fbid === fbid);
        return this.users[index];
    }
    login(name, fbid, access_token)
    {
        let user = this.users.find(x=> x.fbid == fbid);
        if(!user){
            user = new User(name, fbid, access_token);
            this.users.push(user);
            //console.log(user);
        }
        user.access_token = access_token;
        return user;
    }
}

class User
{
    
    //constructor(name, email, password)
    constructor(name, fbid, access_token)
    {
        this.name = name;
        this. fbid = fbid;
        this.access_token = access_token;
        //this.email = email;
        //this.password = password;
        this.exercises = [];
        this.friendsList = [];
        this.weights = [];
        this.meals = [];
    }

    addExercise(exercise)
    {
        this.exercises.push(exercise);
    }

    getExercise()
    {
        return this.exercises;
    }

    addFriend(friend)
    {
        this.friendsList.push(friend);
    }

    getFriends()
    {
        return this.friendsList;
    }
    
    addWeight(weight)
    {
        this.weights.push(weight);
    }

    getWeight()
    {
        return this.weights;
    }

    addMeal(meal)
    {
        this.meals.push(meal);
    }

    getMeal()
    {
        return this.meals;
    }

    
}


class Exercise
{
    constructor(date, exName, hour, min, sec)
    {
        this.date = date;
        this.exName = exName;
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.videoLink;
    }
}

class Friend
{
    constructor(name)
    {
        this.name = name;
    }
}

class Weight
{
    constructor(date, weight)
    {
        this.date = date;
        this.weight = weight;
    }
}

class Meal
{
    constructor(date, mealTime, food)
    {
        this.date = date;
        this.mealTime = mealTime;
        this.food = food;
    }
}

module.exports = {
    UserData, User, Exercise, Friend, Weight, Meal
}