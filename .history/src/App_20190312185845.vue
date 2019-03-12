<template>
  <div id="app">
   <form action="">
     <input type="text" placeholder="Enter Username" v-model="username"> <p>{{usernameMessage}}</p>
     <input type="text" placeholder="Enter Password" v-model="password"> <p>{{passwordMessage}}</p>
   </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      usernameMessage: '10 Characters left',
      passwordMessage: '8 Characters left',
      username: '',
      password:''
    }
  },
  methods: {
    
  },
  watch: {
    username(){
      if(this.username.length>10){
        alert('Name Cannot be greater than 10')
      }
    }
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
