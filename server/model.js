class UserData
{
    constructor(users)
    {
        this.users = [];
        this.exercises = [];
    }

    addUser(user)
    {
        this.users.push(user);
    }

}

class User
{
    constructor(name, email, password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
    } 
}


module.exports = {
    UserData, User
}