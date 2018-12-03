//const api_root = "http://localhost:80/userData";
const api_root = "http://localhost:80";
//export let UserId = null;
export let FBID = null;
export let UserName = null;


export function GetState(){
    return myFetch(api_root + "/");
}
/*
export function AddUser(user){
    UserId = user.name;
    return myFetch(api_root + `/users`, user)
}*/
export function GetUsers(){
    return myFetch(api_root + `/users`)
}

export function AddWeight(weight){
    return myFetch(api_root + `/user/weight/${FBID}`, weight)
}
export function GetWeight(){
    return myFetch(api_root + `/user/weight/${FBID}`)
}

export function AddMeal(meal){
    return myFetch(api_root + `/user/meal/${FBID}`, meal)
}
export function GetMeal(){
    return myFetch(api_root + `/user/meal/${FBID}`)
}

export function AddExercise(exercise){
    return myFetch(api_root + `/users/exercise/${FBID}`, exercise)
}
export function GetExercise(){
    return myFetch(api_root + `/user/exercise/${FBID}`)
}

export function AddFriend(friend){
    //console.log(friend)
    return myFetch(api_root + `/user/friends/${FBID}`, friend)
}
export function GetFriends(){
    return myFetch(api_root + `/user/friends/${FBID}`)
}

export function GetFBID(){
    return FBID;
}
export function GetName(){
    return UserName
}

export function Login(name, fbid, access_token){
    
            UserName = name;
            FBID = fbid;
            return myFetch(api_root + `/users`, { name: name, fbid: fbid, access_token: access_token})
            //.then(x=> UserId = x.id);
    
}

/*export function promiseToLogin(call_back) {
    FBID = null;
    UserName = null;
    return(call_back)
}*/

function promiseToLogin(call_back){
        FBID = null;
        UserName = null;
        if(UserName === null)
        {
            return call_back
        }
}

export function Logout(call_back){
    promiseToLogin(call_back)
    .then(call_back())
}

  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
      };
      if(data){
          options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
      }
      return fetch(url, options)
      .then(response =>{
        return response.json()
      }); // parses response to JSON
  }