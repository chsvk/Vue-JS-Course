<template>
  <div id="app">
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
