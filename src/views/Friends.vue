<template>
    <div>
    
<div>
    <input type="text" v-model="search" placeholder="search friends">
</div>
<div >
    <table  class="table table-primary">
  <thead class="thead-dark">
      <tr>
      <th scope="col">Name</th>
      <th scope="col"></th>
      </tr>
  </thead>
  <tbody v-for="user in filteredUsers" :key="user" v-if="FBID() != user.fbid">
      <tr>
      <th  scope="row" friendFBID = user.fbid>{{user.name}}</th>
        <th  scope="row"><button @click.prevent="addFriend({fbid: user.fbid, name: user.name})">Click to add friend</button></th>
      </tr>
  </tbody>
  </table>
</div>



<div>
    <input type="text" v-model="search2" placeholder="search friends">
    <button @click.prevent="searchUsers">Search</button>
</div>
<div >
    <table  class="table table-primary">
  <thead class="thead-dark">
      <tr>
      <th scope="col">Name</th>
      <th scope="col"></th>
      </tr>
  </thead>
  <tbody v-for="user in state.users" :key="user" v-if="FBID() != user.fbid">
      <tr>
      <th  scope="row" friendFBID = user.fbid>{{user.name}}</th>
        <th  scope="row"><button @click.prevent="addFriend({fbid: user.fbid, name: user.name})">Click to add friend</button></th>
      </tr>
  </tbody>
  </table>
</div>




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
            search: "",
            search2: "",
            users2: [],
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
        searchUsers(){
            api.searchUser(search2)
            .then()
        },
        FBID: ()=> api.FBID,
        UserName: ()=> api.UserName
    },
    computed: {
        filteredUsers(){
            return this.state.users.filter((user)=>{
                return user.name.match(this.search);
            });
        }
        /*filteredUsers(){
            api.postSearch(this.search)
            .then(api.findUsers())
        }*/
        


    },
    created(){
        this.getUsers();
        this.getFriends();
    }
}
</script>
