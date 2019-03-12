<template>
  <div id="app">
    <div @mousemove="mouseEvent()" class="mouse">

    </div>
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
    mouseEvent(){
      console.log('Mouse Move')
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

  .mouse{
    height: 500px;
    width: 500px;
    background: lightcoral;
  }
}
</style>
