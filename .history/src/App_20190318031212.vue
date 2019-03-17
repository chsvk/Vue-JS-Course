<template>
  <div id="app">
    <h1>This is the App Component</h1>
    <input type="text" placeholder="Enter Name" v-model="name">
  </div>
</template>


<script>

export default {
  name: 'app',
  components:{

  },
  data(){
    return{
      name: ''
    }
  },
  methods: {
    
  },
  beforeCreate(){
    alert('Before Create')
  },
  created(){
    alert('Created')
  },
  beforeMount(){
    alert("Before Mount")
  },
  mounted(){
    alert('Mounted')
  },
  beforeDestroy(){
    alert('Before Destroy')
  },
  destroyed(){
    alert('Destroyed')
  },
  beforeUpdate(){
    alert('Before Update')
  },
  updated(){
    alert('Updated')
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
