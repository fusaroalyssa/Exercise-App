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
    } 

    addExercise(exercise)
    {
        this.exercises.push(exercise);
    }

    addFriend(friend)
    {
        this.friendsList.push(friend);
    }
}


class Exercise
{
    constructor(exName, hour, min, sec)
    {
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

module.exports = {
    UserData, User, Exercise, Friend
}