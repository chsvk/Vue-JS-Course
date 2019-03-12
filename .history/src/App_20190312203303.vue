<template>
  <div id="app">
    <input type="text" placeholder="Enter The Number" v-model.number="number">
    <Dummy v-for="component in number"/>
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
      number: null
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
