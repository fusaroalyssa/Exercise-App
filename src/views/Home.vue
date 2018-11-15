<template>
  <div class="home">
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

  <div>
    <ul>
      <li v-for="u in state.users" :key="u.text">
        users {{u.text}}
      </li>
    </ul>
  </div>

   <div class="card" >
      <div class="card-body">
          <h5 class="card-hearder">
            Users
            <a @click.prevent="addUser" class="btn btn-sm btn-primary" >add User</a>
          </h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">
                  <span class="badge badge-primary badge-pill">{{getUsers}}</span>
              </li>
          </ul>
      </div>
  </div>


  </div>   
</template>

<style lang="scss">

</style>

<script>
import * as api from '@/services/api_access';
export default {
  data(){
    return{
      name: null, email: null, password: null,
      state:{
        users: []
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
    }
  }
}
</script>

