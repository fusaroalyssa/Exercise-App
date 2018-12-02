<template>
  <div class="home">
  
  <!--img  v-if="userName !== null" :src="`https://graph.facebook.com/${FBID()}/picture`" />-->
  <img  v-if="UserName() !== null" :src="`https://graph.facebook.com/${FBID()}/picture`" />
  &nbsp;
  <button @click.prevent="logout" v-if="UserName() !== null" type="button" class="btn btn-success">Logout</button>

  <!--<h3 v-if="UserName() !== null">Welcome {{UserName()}}</h3>
  <h3 v-if="UserName() === null">Not logged in</h3>
  <h4 v-if="UserName() === null">Login with Facebook</h4>-->
  
  <h3 v-if="state.userName !== null ">Welcome {{state.userName}}</h3>
  <h3 v-else-if="UserName() !== null">Welcome {{UserName()}}</h3>

  <!--<h3 v-if="state.userName === null">Not logged in</h3>-->
  <h3 v-if="UserName() === null">Not logged in</h3>

  <!--<h4 v-if="state.userName === null">Login with Facebook</h4>-->
  <h4 v-if="UserName() === null">Login with Facebook</h4>

 <form @submit.prevent="login" v-if="UserName() === null">
  <!--<form @submit.prevent="login" v-if="state.userName === null">-->
    <button type="submit" class="btn btn-primary">Login</button>
  </form>

  <button @click.prevent="getState">Click to see your info</button>
    
  <table class="table table-bordered table-primary">
  <thead class="thead-dark">
      <tr>
      <th scope="col">Date (year-month-day)</th>
      <th scope="col">Weight</th>
      </tr>
  </thead>
  <tbody v-for="w in state.weight" :key="w">
      <tr>
      <th scope="row">{{w.date}}</th>
      <td>{{w.weight}}</td>
      </tr>
  </tbody>
  </table>

  <table  class="table table-bordered table-primary">
  <thead class="thead-dark">
      <tr>
      <th scope="col">Date (year-month-day)</th>
      <th scope="col">Time</th>
      <th scope="col">Food</th>
      </tr>
  </thead>
  <tbody v-for="m in state.meal" :key="m">
      <tr>
      <th scope="row">{{m.date}}</th>
      <td>{{m.mealTime}}</td>
      <td>{{m.food}}</td>
      </tr>
  </tbody>
  </table>

  <table  class="table table-bordered table-primary">
  <thead class="thead-dark">
      <tr>
      <th scope="col">Date (year-month-day)</th>
      <th scope="col">Exercise</th>
      <th scope="col">Time</th>
      </tr>
  </thead>
  <tbody v-for="e in state.exercise" :key="e">
      <tr>
      <th scope="row">{{e.date}}</th>
      <td>{{e.exName}}</td>
      <td>hour: {{e.hour}} min: {{e.min}} sec: {{e.sec}}</td>
      </tr>
  </tbody>
  </table>

  <table  class="table table-bordered table-primary">
    <thead class="thead-dark">
        <tr>
        <th scope="col">Friends</th>
        </tr>
    </thead>
    <tbody v-for="f in state.friends" :key="f">
        <tr>
        <th scope="row">{{f.name}}</th>
        </tr>
    </tbody>
    </table>


  </div>   
</template>



<style lang="scss">

</style>



<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';
//let loopTimer = null;  

export default {
  data(){
    return{
      state:{
        userName: null,
        userFBID: null,
        weight: [],
        meal: [],
        exercise: [], 
        friends: [],
      }
    }
  },
  created(){
      //if(this.userName !== null)
      //{
        //loopTimer = setInterval(this.refresh, 1000);
      //}
      
  },  
  methods: {
    refresh(){
      //this.login()
      //this.getState()
      //this.UserName()
    },
    /*setUserInfo()
    {
      this.state.userName = api.GetName()
    },*/
    getState(){
      api.GetWeight()
      .then(x=> this.state.weight = x)
      api.GetMeal()
      .then(x=> this.state.meal = x)
      api.GetExercise()
      .then(x=> this.state.exercise = x)
      api.GetFriends()
      .then(x=> this.state.friends = x)
      //api.GetFBID()
      //.then(x=> this.state.userFBID = x)
      //api.GetName()
      //.then(x=> this.state.userName = x)
    },
    getUsers(){
      api.GetUsers()
    },
    login() {
      fb.FBLogin(()=>{
        this.state.userName = api.GetName()
      })
      //.then(this.getState())
      //.then(window.location.reload())
    },
    FBID: ()=> api.FBID,
    //UserId: ()=> api.UserId,
    UserName: ()=> api.UserName 
  }
}
</script>