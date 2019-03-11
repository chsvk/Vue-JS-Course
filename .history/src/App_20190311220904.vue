<template>
  <div id="app">
    <h1>Computed Properties vs Methods</h1>

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
      return "Vamshi Krishna"
    }
  },
  computed: {
    returnSum(){
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
