<template>
    <div class="person">
        <h3>{{person.name}}</h3>
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
export default {
    props: {
        person: {
            type: Object,
            required: true
        }
    },
    computed: {
        friendsCount(){
            return this.person.friends.length;
        }
    },
}
</script>

<style>

</style>
