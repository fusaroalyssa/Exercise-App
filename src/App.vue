<template>
  <div id="app" class="container">
    <div class="display-3">
      <img  v-if="UserName() !== null" :src="`https://graph.facebook.com/${FBID()}/picture`" />
      Exercise App
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
    FBID: ()=> api.FBID,
    UserId: ()=> api.UserId,
    UserName: ()=> api.UserName
  }
}
</script>
