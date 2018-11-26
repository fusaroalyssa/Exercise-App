<template>
  <div class="home">

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

  <h3>Login with Facebook</h3>
  <form @submit.prevent="login">
    <button type="submit" class="btn btn-primary">Login</button>
  </form>

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
      name: null, email: null, password: null,
      state:{
        //users: []
      }
    }
  },
  methods: {
    refresh(){
      api.GetState()
      .then(x=> this.state = x)
    },
    addUser(){
      api.AddUser({ name: this.name, email: this.email, password: this.password})
    },
    getUsers(){
      api.GetUsers()
    },
    login() {
      fb.FBLogin();
    },
  }
}
</script>

