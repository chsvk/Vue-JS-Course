<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Vue.js App"/> -->

    <!--  METHODS AND COMPUTED PROPERTIES -->
    <!-- <h1>Methods Properties</h1>
    <h3>My product is {{variableA * variableB * global_dynamicVariable}}</h3>
    <input type="number" placeholder="Enter A Number to multiply" v-model="global_dynamicVariable">
    <input type="number" placeholder="Enter Principle" v-model="principle">
    <input type="number" placeholder="Enter Interest" v-model="interest">
    <input type="number" placeholder="Enter Rate" v-model="rate">
    <h3>{{returnSimpleInterest}}</h3> -->

    <!-- Dynamic Links using Data Binding -->
    <input type="text" placeholder="Enter the Website URL" v-model="websiteLink">
    <a v-bind:href="websiteLink">My Website</a>

    <!-- Dynamic Classes using Data Binding -->

    <h4 v-bind:class="{active: activeBackground}">I am Heading</h4>

    <!-- Dynamic Styling using Data Binding -->

    <h1 :style="{color: customColor}">Vamshi Krishna</h1>
    <input type="text" placeholder="Enter color name" v-model="customColor">


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',

  // LECTURE - METHODS AND COMPUTED PROPERTIES
  // data(){
  //   return {
  //     variableA: 20,
  //     variableB: 10,
  //     global_dynamicVariable: '',
  //     principle: 0,
  //     interest: 0,
  //     rate: 0
  //   }
  // },
  // components: {
  //   HelloWorld
  // },
  // methods:{
  //   multiply(local_dynamicVariable){
  //     return this.variableA * this.variableB * local_dynamicVariable
  //   }
  // },
  // computed: {
  //   returnSimpleInterest(){
  //     return ((this.principle * this.interest * this.rate)/100)
  //   }
  // }

  data(){
    return{
      websiteLink: "",
      activeBackground: true,
      customColor: ''
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
