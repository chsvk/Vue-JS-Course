<template>
  <div id="app">
    <button v-on:click="alert('The Button Was Clicked!')">Click Me</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      
    }
  },
  methods: {
    clicked(){
      alert('The Button Was Clicked!')
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

  .active{
    background: lightblue;
  }
}
</style>
