<template>
  <div id="app">
    <Data />
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
