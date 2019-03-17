<template>
    <form @submit.prevent="submitForm()" action="">
        <h1>Login Form</h1>
        <h4>{{message}}</h4>
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
            this.$emit('onSubmit')
        }
    },
}
</script>

<style>

</style>
