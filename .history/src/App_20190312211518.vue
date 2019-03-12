<template>
  <div id="app">
    <Login />
  </div>
</template>


<script>
import Login from '@/component/Login'
export default {
  name: 'app',
  components:{
    Login,
  },
  data(){
    return{
      message: 'Hello from Data Component'
    }
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
