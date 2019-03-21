<template>
    <div class="person">
        <h3>{{person.name}}</h3>
        <h4>{{person.age}}</h4>
        <h4>{{person.company}}</h4>
        <h4>{{person.email}}</h4>
        <h5>Friends: {{friendsCount}}</h5>
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
