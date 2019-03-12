<template>
  <div id="app">
    <Dummy v-for="component in 10"/>
  </div>
</template>

<script>
import Dummy from '@/components/Dummy'
export default {
  name: 'app',
  components:{
    Dummy
  },
  data(){
    return{
     
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
