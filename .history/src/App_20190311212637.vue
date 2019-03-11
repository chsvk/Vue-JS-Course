<template>
  <div id="app">
    <h1>Two-Way Data Binding</h1>
    <h3>Using V-Bind</h3>
    <input type="text" placeholder="Enter V-Bind name" v-bind:value="name"><br>
    <h3>Using V-Bind</h3>
    <input type="text" placeholder="Enter V-Model Name" v-model="name">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      name: 'Vamshi Krishna'
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
