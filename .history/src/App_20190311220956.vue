<template>
  <div id="app">
    <h1>Computed Properties vs Methods</h1>
    <p>Methods: {{fullName()}}</p>
    <p>Computed: {{returnSum}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      numberA: 0,
      numberB: 0,
    }
  },
  methods: {
    fullName(){
      console.log("Vamshi Krishna")
      return "Vamshi Krishna"
    }
  },
  computed: {
    returnSum(){
      console.log(this.numberA + this.numberB)
      return this.numberA + this.numberB
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
