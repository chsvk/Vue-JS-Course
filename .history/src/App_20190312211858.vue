<template>
  <div id="app">
    <h1>{{message}}</h1>
    <Login @onSubmit="formSubmitted()" />
  </div>
</template>


<script>
import Login from '@/components/Login'
export default {
  name: 'app',
  components:{
    Login,
  },
  data(){
    return{
      message: '😭Form Has not been Submitted'
    }
  },
  methods: {
    formSubmitted(){
      this.message = "😁Form Submitted"
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
