<template>
  <div id="app">
    <h1>This is from App Component</h1>
    <h3>
    <router-link :to="{name: 'Login', params: {message: messageToLogin}}">Login</router-link> <br>
    <router-link to="register">Register</router-link></h3>
    <router-view/>
  </div>
</template>


<script>
import Login from '@/components/Login'
export default {
  name: 'app',
  components:{
    Login
  },
  data(){
    return{
      messageToLogin: 'The password is 12345'
    }
  },
  methods: {
    
  },  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
