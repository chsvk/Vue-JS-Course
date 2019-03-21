<template>
    <div class="people">
        <h1>People List</h1>
        <Person v-for="(person,index) in Data" :key="index" :person="person" />
    </div>
</template>

<script>
import Data from '@/Data.json'
import Person from '@/components/Person'
export default {
    components: {
        Person
    },
    created(){
        console.log(Data);
    }
}
</script>

<style>

</style>
