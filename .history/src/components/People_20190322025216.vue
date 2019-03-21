<template>
    <div class="people">
        <h1>People List</h1>
        <Person v-for="(person,index) in people" :key="index" :person="person" />
    </div>
</template>

<script>
import Data from '@/Data.json'
import Person from '@/components/Person'
export default {
    data(){
        return{
            people: []
        }
    },
    components: {
        Person
    },
    created(){
        this.people = Data;
    }
}
</script>

<style>

</style>
