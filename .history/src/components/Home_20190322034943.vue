<template>
    <div class="home">
        <h1>Todays Date is: {{getDate}} </h1>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            required: false,
            type: String
        }
    },
    computed: {
        getDate(){
            return String(new Date()).substring(0, 15)
        }
    },
}
</script>

<style>

</style>
