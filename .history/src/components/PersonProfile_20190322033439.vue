<template>
    <div class="person">
        <h1>{{person.name}}</h1>
        <h3>About: {{person.about}}</h3>
        <h4>{{person.age}}</h4>
        <h4>{{person.company}}</h4>
        <h4>{{person.email}}</h4>
        <h5>Friends: {{friendsCount}}</h5>
        <h3>Friends List: </h3>
        <div v-for="(friend,index) in person.friends" :key="index" class="friend">
            <p>{{friend.name}}</p>
        </div>
    </div>
</template>

<script>
import Data from '@/Data.json'
export default {
    data(){
        return{
            personID: this.$route.params.personID,
            index: '',
        }
    },
    computed: {
        person(){
            return Data[this.index]
        },
        friendsCount(){
            return this.person.friends.length
        }
    },
    created(){var vm = this;
        Data.forEach(element => {
            if(Object.values(element).indexOf(this.personID) == 0){
                vm.index = Object.values(element).indexOf(this.personID)
            }
        });
    }
}
</script>

<style lang="scss" scoped>
    .person{
        h1{
            text-align: center;
            margin: 1em;
        }
    }
</style>

