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
    methods: {
        submitForm(){
            console.log('Form Has Been Submittted')
        }
    }
}
</script>

<style>

</style>
