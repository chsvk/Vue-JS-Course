<template>
  <div id="app">
   <h1>Input Events</h1>
   <input type="text" @blur="blur()" placeholder="Enter Name">
   <input type="text" @focus="focus()">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      name: ""
    }
  },
  methods: {
    blur(){
      alert('Clicked Off input field')
    },
    focus(){
      alert('You Have focuessed')
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
