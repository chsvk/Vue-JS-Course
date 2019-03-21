<template>
    <div class="home">
        <input type="text" placeholder="Enter First Name" v-model="firstName">
        <input type="text" placeholder="Enter Last Name" v-model="lastName">
        <input type="text" placeholder="Enter Age" v-model="age">
        <h1>My Name is {{returnFullName()}}</h1>
        <h1>{{returnPersonAge}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            firstName: '',
            lastName: '',
            age: ''
        }
    },
    methods: {
        returnFullName(){
            return this.firstName + " " + this.lastName
        },
   },
   computed: {
       returnPersonAge(){
           return this.age + " --This is My age"
       }
   }
}
</script>

<style>

</style>
