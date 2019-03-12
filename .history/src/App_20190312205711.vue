<template>
  <div id="app">
    <input type="text" placeholder="Enter The Number" v-model.number="number">
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
  },
  data(){
    return{
      number: ""
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
