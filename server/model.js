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
        /*
       var i;
       for(i = 0; i< this.users.length; i++)
       {
           if(name === this.users[i].name)
           {
               return this.users[i];
           }
       }*/
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

module.exports = {
    UserData, User, Exercise
}