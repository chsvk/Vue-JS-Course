<template>
    <div class="people">
        <h1>People List</h1>
        <div class="peopleList">
            <Person class="person" v-for="(person,index) in people" :key="index" :person="person" />
        </div>
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

<style lang="scss" scoped>
    .people{
        .peopleList{
            display: grid;
            grid-template-columns: repeat(3,1fr);

            .person{
                margin: 1em;
            }
        }
    }
</style>

