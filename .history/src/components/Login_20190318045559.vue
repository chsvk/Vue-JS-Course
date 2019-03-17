<template>
    <form @submit.prevent="submitForm()" action="">
        <h1>Login Form</h1>
        <input type="text" placeholder="Enter Username">
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
    methods: {
        submitForm(){
            this.$router.push({
                path: '/login'
            });
        }
    },
}
</script>

<style>

</style>
