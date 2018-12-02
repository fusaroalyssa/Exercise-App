<template>
    <div>
    <!--
    <form @submit.prevent="addFriend">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="name" placeholder="Enter Friends Name" v-model="name">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
   </form>
    <br>
    -->

<button @click.prevent="getUsers">Click here to see friends you can add</button>
    
  <table  class="table table-primary">
  <thead class="thead-dark">
      <tr>
      <th scope="col">Name</th>
      <th scope="col"></th>
      </tr>
  </thead>
  <tbody v-for="u in state.users" :key="u" v-if="FBID() != u.fbid">
      <tr>
      <th  scope="row" friendFBID = u.fbid>{{u.name}}</th>
        <th  scope="row"><button @click.prevent="addFriend({fbid: u.fbid, name: u.name})">+</button></th>
      </tr>
  </tbody>
  </table>


  <button @click.prevent="getFriends">Click here to see your friends</button>
    
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
export default {
    data(){
        return{
            //friendName: null,
            //friendFBID: null,
            state: {
                userName: null,
                userFBID: null,
                friends: [],  
                users:[]
            },
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        addFriend(friend){
            api.AddFriend(friend);
        },
        getFriends(){
            api.GetFriends()
            .then(x=> this.state.friends = x)
        },
        getUsers(){
            api.GetUsers()
            .then(x=> this.state.users = x)
        },
        FBID: ()=> api.FBID,
        UserName: ()=> api.UserName
    }
}
</script>
