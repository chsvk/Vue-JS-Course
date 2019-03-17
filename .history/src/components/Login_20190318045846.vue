<template>
    <form @submit.prevent="submitForm()" action="">
        <h1>Login Form</h1>
        <input type="text" placeholder="Enter Username" v-model="username">
        <input type="text" placeholder="Enter Password">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: false
        }
    },
    data(){
        return{
            username: ''
        }
    },
    methods: {
        submitForm(){
            var vm = this;
            this.$router.push({
                name: 'Home',
                params: {
                    username: vm.username
                }
            })
        }
    },
}
</script>

<style>

</style>
