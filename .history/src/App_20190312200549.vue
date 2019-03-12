<template>
  <div id="app">
    <Login v-if="showLogin"/>
    <Register v-else/>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'
export default {
  name: 'app',
  components:{
    Login,
    Register,
  },
  data(){
    return{
      showLogin: true
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
