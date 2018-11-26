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

    getUser(name)
    {
        var index = this.users.findIndex(user => user.name === name);
        return this.users[index];
    }
}

class User
{
    
    constructor(name, email, password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
        this.exercises = [];
        this.friendsList = [];
        this.weights = [];
        this.meals = [];
    } 

    addExercise(exercise)
    {
        this.exercises.push(exercise);
    }

    addFriend(friend)
    {
        this.friendsList.push(friend);
    }
    
    addWeight(weight)
    {
        this.weights.push(weight);
    }

    addMeal(meal)
    {
        this.meals.push(meal);
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