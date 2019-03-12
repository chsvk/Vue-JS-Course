<template>
  <div id="app">
    <Login/>
    <Register/>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'
export default {
  name: 'app',
  components:{
    Login,
    Register
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
