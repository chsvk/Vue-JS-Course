<template>
  <div id="app">
    <div @mouseup="mouseup()" class="mouse">

    </div>
    <div @mousedown="mousedown()" class="mouse_one">

    </div>
    <div @mouseenter="mouseenter()" class="mouse_two">

    </div>
    <div @mouseleave="mouseleave()" class="mouse_three">

    </div>
    <div @mousemove="mousemove()" class="mouse_four">

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
    mouseup(){
      console.log('Mouse up')
    },
    mousedown(){
      console.log('Mouse down')
    },
    mouseenter(){
      console.log("Mouse Enter")
    },
    mouseleave(){
      console.log('Mouse Leave')
    },
    mousemove(){
      console.log('Mouse Moved')
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
  .mouse_one{
    height: 500px;
    width: 500px;
    background: lightblue;
  }
  .mouse_two{
    height: 500px;
    width: 500px;
    background: lightgreen;
  }
  .mouse_three{
    height: 500px;
    width: 500px;
    background: lightseagreen;
  }
  .mouse_four{
    height: 500px;
    width: 500px;
    background: lightskyblue;
  }
}
</style>
