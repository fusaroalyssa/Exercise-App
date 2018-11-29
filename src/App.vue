<template>
  <div id="app" class="container">
    <div class="display-3">
      Exercise App
      <br>
      <img  v-if="UserName() !== null" :src="`https://graph.facebook.com/${FBID()}/picture`" />
      &nbsp;
      <button @click.prevent="logout" v-if="UserName() !== null" type="button" class="btn btn-success">Logout</button>
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px;}
</style>

<script>
// @ is an alias to /src
import * as api from '@/services/api_access';
import Nav from '@/components/Nav.vue'
import '@/services/facebook'

export default {
  name: 'home',
  components: {
    Nav
  },
  methods:{
    logout(){
        api.Logout()
        //.then(window.location.reload())
    },
    FBID: ()=> api.FBID,
    UserId: ()=> api.UserId,
    UserName: ()=> api.UserName
  }
}
</script>
