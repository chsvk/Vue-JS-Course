<template>
  <div id="app">
    <h1>Header</h1>
    <header/>
    <footer-component/>
    <mewComponent/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from './components/Header'
import mewComponent from '@/components/newComponent'
export default {
  name: 'app',
  components:{
    Header,
    Footer,
    mewComponent
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
