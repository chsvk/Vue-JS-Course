<template>
  <div id="app">
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
      showLogin: true
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
