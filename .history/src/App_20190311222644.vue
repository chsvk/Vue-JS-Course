<template>
  <div id="app">
    <h1>Methods Vs Computed Properties</h1>
    <h3>Methods: {{returnName()}}</h3>
    <h3>Computed: {{sumOfTwo}}</h3>
    <input type="text" placeholder="Enter Name" v-model="name">
    <input type="text" placeholder="Enter Number" v-model="A">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      name: 'Vamshi Krishna',
      A: 0,
      B: 0
    }
  },
  methods: {
    returnName(){
      console.log('Method has run')
      return this.name
    }
  },
  computed: {
    sumOfTwo(){
      console.log('Computed Has Run')
      return this.A + this.B;
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
