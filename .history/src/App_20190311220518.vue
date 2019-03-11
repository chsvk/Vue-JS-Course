<template>
  <div id="app">
    <button v-on:dblclick="counter++">Click Me</button>
    <h1>{{counter}}</h1> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      counter: 0,
    }
  },
  methods: {
    clicked(){
      this.counter++
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
