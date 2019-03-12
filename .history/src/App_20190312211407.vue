<template>
  <div id="app">
    <Data :message="message" :age="10" />
  </div>
</template>


<script>
import Data from '@/components/Data'
export default {
  name: 'app',
  components:{
    Data
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
