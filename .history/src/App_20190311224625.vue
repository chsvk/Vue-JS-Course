<template>
  <div id="app">
   <h1>Input Events</h1>
   
   <form @submit="submitPressed()" action="">
     <input type="text" @blur="blur()" placeholder="Enter Name" v-model="name">
    <input type="text" @focus="focus()">
    <button type="submit"></button>
   </form>
   <form @submit.once="submitPressedOnce()" action="">
     <button type="submit">Submit</button>
   </form>
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
    },
    submitPressed(){
      console.log(this.name)
    },
    submitPressedOnce(){
      console.log('The second form has been pressed')
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
