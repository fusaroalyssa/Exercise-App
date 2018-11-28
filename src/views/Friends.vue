<template>
    <div>Friends Page

    <form @submit.prevent="addFriend">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="name" placeholder="Enter Friends Name" v-model="name">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
   </form>
    <br>


  <button @click.prevent="getFriends">getFriends Button</button>
    
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
            name: null,
            state: {
                friends: []  
            },
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        addFriend(){
            api.AddFriend({name: this.name})
        },
        getFriends(){
            api.GetFriends()
            .then(x=> this.state.friends = x)
        },
    }
}
</script>
