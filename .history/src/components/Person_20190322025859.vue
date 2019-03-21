<template>
    <div class="person">
        <h3>{{person.name}}</h3>
        <h4>{{person.age}}</h4>
        <h4>{{person.company}}</h4>
        <h4>{{person.email}}</h4>
        <h5>Friends: {{friendsCount}}</h5>
        <button @click="viewProfile()">View Profile</button>
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
    methods: {
        viewProfile(){var vm = this;

            this.$router.push({
                name: 'Person',
                params: {
                    person: vm.person
                }
            })
        }
    }
}
</script>

<style>

</style>
