<template>
  <div class="home">

<!--<img :src="`https://graph.facebook.com/${FBID()}/picture`" />-->
<h3 v-if="UserName() !== null">Welcome {{UserName()}}</h3>
<h3 v-if="UserName() === null">Not logged in</h3>
<!--
  <h3>Create Account</h3>
  <form @submit.prevent="addUser">
    <div class="form-group">
      <label for="exampleInputName">Name</label>
      <input type="name" class="form-control" id="exampleInputName" placeholder="Name" v-model="name">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
-->
  <h4 v-if="UserName() === null">Login with Facebook</h4>
  <form @submit.prevent="login" v-if="UserName() === null">
    <button type="submit" class="btn btn-primary">Login</button>
  </form>

  <button @click.prevent="getState">getTables Button</button>
    
    <table  class="table table-bordered table-primary">
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


  </div>   
</template>

<style lang="scss">

</style>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';

export default {
  data(){
    return{
      //name: this.login,
      //name: null, email: null, password: null,
      state:{
        weight: [],
        meal: [],
        exercise: [],
        friends: [],
      }
    }
  },
  /*created(){
      loopTimer = setInterval(this.refresh, 1000);
  },*/
  methods: {
    refresh(){
      this.getState()
    },
    getState(){
      api.GetWeight()
      .then(x=> this.state.weight = x)
      api.GetMeal()
      .then(x=> this.state.meal = x)
      api.GetExercise()
      .then(x=> this.state.exercise = x)
    },
    /*addUser(){
      api.AddUser({ name: this.name, email: this.email, password: this.password})
    },*/
    getUsers(){
      api.GetUsers()
    },
    login() {
      fb.FBLogin()
      //.then(window.location.reload())
    },
    FBID: ()=> api.FBID,
    UserId: ()=> api.UserId,
    UserName: ()=> api.UserName
    
  }
}
</script>