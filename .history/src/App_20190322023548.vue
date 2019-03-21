<template>
  <div id="app">
    <h1>This is from App Component</h1>
    <h3>
    <router-link to="login">Login</router-link> <br>
    <router-link to="register">Register</router-link></h3>
    <router-view/>
  </div>
</template>


<script>
import Login from '@/components/Login'
import Data from '@/Data.json'
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
  mounted(){
    Data.forEach(element => {
      // console.log(Object.values(element).indexOf('5c93f9c449543adbd7613cb1'))
    });
    console.log(Object.values(Data).indexOf('5c93f9c449543adbd7613cb1'))
  }
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
