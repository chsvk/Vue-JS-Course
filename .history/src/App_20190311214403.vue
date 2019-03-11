<template>
  <div id="app">
    <h1>Data Binding</h1>
    <a v-bind:href="websiteLink">My Website</a>
    <input type="text" placeholder="Enter Website Link" v-model="websiteLink">
    <h3 v-bind:class="{active: classActive}">Heading With Background</h3>
    <h3 :style="{color: colorForText}">Vamshi Krishna</h3>
    <input type="text" placeholder="Enter Text Color" v-model="colorForText">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      websiteLink: '',
      classActive: true,
      colorForText: ''
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
