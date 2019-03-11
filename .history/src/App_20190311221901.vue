<template>
  <div id="app">
    <h1>Method: {{fullName()}}</h1>
    <h1>Computed: {{sumOfTwo}}</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      numbera: 0,
      numberb: 0
    }
  },
  methods: {  
    fullName(){
      return "Vamshi Krishna"
    }
  },
  computed: {
    sumOfTwo(){
      return this.numbera + this.numberb
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
