<template>
  <div id="app">
    <h1>Methods Vs Computed Properties</h1>
    <h3>Methods: {{returnName()}}</h3>
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
  },
  methods: {
    returnName(){
      console.log('Method has run')
      return this.name
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
